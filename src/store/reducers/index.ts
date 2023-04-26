import * as fromPost from './post-page.reducer'
import * as fromKubs from './kubernetes.reducer'
import { combineReducers } from 'redux'

export interface State {
  posts: fromPost.PostState
  kuberenetes: fromKubs.KubernetesState
}

export const reducer = combineReducers<State>({
  posts: fromPost.postsReducer,
  kuberenetes: fromKubs.kubsReducer,
})
