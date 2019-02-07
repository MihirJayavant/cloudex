import * as fromTodo from './todo-page.reducer'
import { combineReducers } from 'redux'

export interface State {
  todos: fromTodo.TodoState
}

const initialState: State = {
  todos: fromTodo.initialState
}

export const reducer = combineReducers<State>({
  todos: fromTodo.todoReducer
})
