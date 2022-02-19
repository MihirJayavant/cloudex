import * as fromTodo from './todo-page.reducer'
import * as fromPost from './post-page.reducer'
import * as fromKubs from './kubernetes.reducer'
import { combineReducers } from 'redux'

export interface State {
  todos: fromTodo.TodoState
  posts: fromPost.PostState
  kuberenetes: fromKubs.KubernetesState
}

export const reducer = combineReducers<State>({
  todos: fromTodo.todoReducer,
  posts: fromPost.postsReducer,
  kuberenetes: fromKubs.kubsReducer
})
