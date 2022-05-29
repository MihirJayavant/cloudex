import { put, select } from 'redux-saga/effects'
import { getProjects } from '../selectors'
import { Database } from '../../db'
import { Ingress, KubernetesProject } from '../../models/kubernetes'
import {
  KubAddDeploymentAction,
  KubGenerateFilesAction,
  KubLoadProjectSuccessAction,
  KubNewProjectAction,
  KubNewProjectEffectAction,
  KubProjectTypes,
} from '../actions'
import { FS, json2yaml } from '../../core/files'

export function* addNewKubsProjectEffect(action: KubNewProjectAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    const ingress = {
      redirects: [],
    }
    const data = { name: action.name, ingress, deployment: [], secrets: [], volumeClaims: [] }
    const id: IDBValidKey = yield database.add('kubernetes', data)
    yield put<KubNewProjectEffectAction>({ type: KubProjectTypes.ADD_NEW_PROJECT_EFFECT, data: { id, ...data } })
  }
}

export function* loadKubsProjectEffect() {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    const result: KubernetesProject[] = yield database.getAll('kubernetes')
    yield put<KubLoadProjectSuccessAction>({ type: KubProjectTypes.LOAD_PROJECTS_SUCCESS, data: result })
  }
}

export function* KubsAllUpdateEffect(action: KubAddDeploymentAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    const projects: KubernetesProject[] = yield select(getProjects)
    const data = projects.find(p => p.id === action.id)
    yield database.update('kubernetes', data)
  }
}

export function* KubsGenerateFilesEffect(action: KubGenerateFilesAction) {
  const project: KubernetesProject = yield action.data
  const fs = new FS()
  if (fs.isAvailable()) {
    yield fs.openOrCreateDir()
    const ingress: Ingress = {
      apiVersion: 'networking.k8s.io/v1',
      kind: 'Ingress',
      metadata: {
        name: 'main-ingress',
        annotations: {
          'nginx.ingress.kubernetes.io/rewrite-target': '/',
        },
      },
      spec: {
        ingressClassName: 'nginx-gateway',
        rules: [{ http: { paths: [] } }],
      },
    }
    yield fs.fileWrite(`ingress-service.yaml`, json2yaml(ingress))
    for (const item of project.deployment) {
      const depData = {
        apiVersion: 'apps/v1',
        kind: 'Deployment',
        metadata: {
          name: `${item.metadataName}-deployment`,
        },
        spec: {
          replicas: item.replicas,
          selector: {
            matchLabels: {
              component: item.componentLabel,
            },
          },
          template: {
            metadata: {
              labels: {
                component: item.componentLabel,
              },
            },
            spec: {
              containers: [
                {
                  name: item.containerName,
                  image: item.containerImage,
                  ports: [
                    {
                      containerPort: item.containerPort,
                    },
                  ],
                },
              ],
            },
          },
        },
      }
      const ipData = {
        apiVersion: 'v1',
        kind: 'Service',
        metadata: {
          name: `${item.metadataName}-cluster-ip-service`,
        },
        spec: {
          type: 'ClusterIP',
          selector: {
            component: item.componentLabel,
          },
          ports: [
            {
              port: item.containerPort,
              targetPort: item.containerPort,
            },
          ],
        },
      }
      yield fs.fileWrite(`${item.metadataName}-deployment.yaml`, json2yaml(depData))
      yield fs.fileWrite(`${item.metadataName}-ip-cluster-service.yaml`, json2yaml(ipData))
    }

    for (const volume of project.volumeClaims) {
      const volData = {
        apiVersion: 'v1',
        kind: 'PersistentVolumeClaim',
        metadata: {
          name: volume.metadataName,
        },
        spec: {
          accessModes: [volume.accessMode],
          resources: {
            requests: {
              storage: `${volume.storageAmount}Gi`,
            },
          },
        },
      }
      yield fs.fileWrite(`${volume.metadataName}-volume-claim.yaml`, json2yaml(volData))
    }

    const cloudex = {
      version: 1,
      kind: 'kubernetes',
      kubernetes: project,
    }
    yield fs.fileWrite(`cloudex.json`, [JSON.stringify(cloudex, undefined, 2)])
  }
}
