
import { KubProjectAction, KubProjectTypes } from '../actions'
import { produce } from 'immer'

export interface KubernetesState {
  projects: string[]
}

export const initialState: KubernetesState = {
  projects: []
}

export function kubsReducer(state = initialState, action: KubProjectAction): KubernetesState {
  return produce(state, draft => {
    switch (action.type) {
      case KubProjectTypes.ADD_NEW_Project:
        draft.projects.push(action.name)
        break;

    }
  })
}
