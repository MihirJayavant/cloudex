import { KubProjectAction, KubProjectTypes } from '../actions'
import { produce } from 'immer'
import { KubernetesProject } from '../../models/kubernetes/project'
import { getInitialState, IAsyncData, withReducer } from '../../models'

export interface KubernetesState extends IAsyncData<KubernetesProject[]> {}

export const initialState: KubernetesState = {
  ...getInitialState<KubernetesProject[]>([]),
}

function baseReducer(state = initialState, action: KubProjectAction): KubernetesState {
  return produce(state, draft => {
    switch (action.type) {
      case KubProjectTypes.ADD_NEW_PROJECT:
        draft.data.push({ id: 0, name: action.name })
        break
      default:
        return state
    }
  })
}

export function kubsReducer(state = initialState, action: KubProjectAction): KubernetesState {
  return withReducer(baseReducer, {
    errorActionType: KubProjectTypes.LOAD_PROJECTS_ERROR,
    loadActionType: KubProjectTypes.LOAD_PROJECTS,
    successActionType: KubProjectTypes.LOAD_PROJECTS_SUCCESS,
  })(state, action)
}
