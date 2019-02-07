import * as fromTodo from './todo-page.reducer'
import * as fromPost from './post-page.reducer'
import { combineReducers } from 'redux'

export interface State {
  todos: fromTodo.TodoState
  posts: fromPost.PostState
}

export const reducer = combineReducers<State>({
  todos: fromTodo.todoReducer,
  posts: fromPost.postsReducer
})
