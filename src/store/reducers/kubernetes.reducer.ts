import { KubProjectAction, KubProjectTypes } from '../actions'
import { produce } from 'immer'
import { KubernetesProject } from '../../models/kubernetes/project'
import { getInitialState, IAsyncData, withReducer } from '../../models'

export interface KubernetesState extends IAsyncData<KubernetesProject[]> { }

export const initialState: KubernetesState = {
  ...getInitialState<KubernetesProject[]>([]),
}

function baseReducer(state = initialState, action: KubProjectAction): KubernetesState {
  return produce(state, draft => {
    switch (action.type) {
      case KubProjectTypes.ADD_NEW_PROJECT_EFFECT:
        draft.data.push(action.data)
        break
      case KubProjectTypes.ADD_DEPLOYMENT: {
        const index = draft.data.findIndex(p => p.id === action.id)
        if (action.index !== undefined) {
          draft.data[index].deployment[action.index] = action.data
        } else {
          draft.data[index].deployment.push(action.data)
        }
      }
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
