import { List } from 'immutable'
import { Todo } from '../../models'
import { TodoAction, TodoActionTypes } from '../actions'

export interface TodoState {
  todos: List<Todo>
}

export const initialState: TodoState = {
  todos: List([])
}

export function todoReducer(state = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionTypes.ADD:
      return {
        ...state,
        todos: state.todos.push(action.payload.todo)
      }

    case TodoActionTypes.DELETE:
      return {
        ...state,
        todos: state.todos.delete(action.payload.index)
      }
    default:
      return state
  }
}
