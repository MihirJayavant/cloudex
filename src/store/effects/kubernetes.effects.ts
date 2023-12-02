import { Database } from '../../db'
import { Ingress, KubernetesProject } from '../../models/kubernetes'
import { FS, json2yaml } from '../../core/files'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addNewProject = createAsyncThunk('kubernetes/addNewProject', async (name: string) => {
  const database: Database = new Database()
  if (database.isAvailable) {
    await database.open()
    const ingress = {
      redirects: [],
    }
    const data: Omit<KubernetesProject, 'id'> = { name, ingress, deployment: [], secrets: [], volumeClaims: [] }
    const id: any = await database.add('kubernetes', data)
    return { id, ...data }
  }
  throw new Error('IndexedDb not found')
})

export const loadProjects = createAsyncThunk('kubernetes/loadProject', async () => {
  const database: Database = new Database()
  if (database.isAvailable) {
    await database.open()
    const result = await database.getAll<KubernetesProject>('kubernetes')
    return result
  }

  throw new Error('IndexedDb not found')
})

export const updateProject = createAsyncThunk('kubernetes/updateProject', async (project: KubernetesProject) => {
  const database: Database = new Database()
  if (database.isAvailable) {
    await database.open()
    await database.update('kubernetes', project)
    return project
  }
  throw new Error('IndexedDb not found')
})

export const generateFiles = createAsyncThunk('kubernetes/generateFiles', async (project: KubernetesProject) => {
  const fs = new FS()
  if (fs.isAvailable()) {
    await fs.openOrCreateDir()
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
    await fs.fileWrite(`ingress-service.yaml`, json2yaml(ingress))
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
      await fs.fileWrite(`${item.metadataName}-deployment.yaml`, json2yaml(depData))
      await fs.fileWrite(`${item.metadataName}-ip-cluster-service.yaml`, json2yaml(ipData))
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
      await fs.fileWrite(`${volume.metadataName}-volume-claim.yaml`, json2yaml(volData))
    }

    const cloudex = {
      version: 1,
      kind: 'kubernetes',
      kubernetes: project,
    }
    await fs.fileWrite(`cloudex.json`, [JSON.stringify(cloudex, undefined, 2)])
  }
  throw new Error('FileSystem not found')
})
