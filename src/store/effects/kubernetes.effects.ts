import { put, select } from 'redux-saga/effects'
import { getProjects } from '../selectors'
import { Database } from '../../db'
import { Ingress, KubernetesProject } from '../../models/kubernetes'
import { KubAddDeploymentAction, KubLoadProjectSuccessAction, KubNewProjectAction, KubNewProjectEffectAction, KubProjectTypes } from '../actions'

export function* addNewKubsProjectEffect(action: KubNewProjectAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
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
    const data = { name: action.name, ingress, deployment: [] }
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
