import * as fromKubs from './kubernetes.reducer'
import { combineReducers } from 'redux'

export interface State {
  kuberenetes: fromKubs.KubernetesState
}

export const reducer = combineReducers<State>({
  kuberenetes: fromKubs.kubsReducer,
})
