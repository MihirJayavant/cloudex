import { put } from 'redux-saga/effects'
import { Database } from '../../db'
import { Ingress, KubernetesProject } from '../../models/kubernetes'
import { KubLoadProjectSuccessAction, KubNewProjectAction, KubProjectTypes } from '../actions'

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
    yield database.add('kubernetes', { name: action.name, ingress })
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
