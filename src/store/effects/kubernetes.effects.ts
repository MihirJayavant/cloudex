import { put } from 'redux-saga/effects'
import { Database } from '../../db'
import { KubernetesProject } from '../../models/kubernetes/project'
import { KubLoadProjectSuccessAction, KubNewProjectAction, KubProjectTypes } from '../actions'

export function* addNewKubsProjectEffect(action: KubNewProjectAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    yield database.add('kubernetes', { name: action.name })
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
