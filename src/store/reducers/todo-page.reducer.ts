import { Todo } from '../../models'
import { TodoAction, TodoActionTypes } from '../actions'
import { produce } from 'immer'

export interface TodoState {
  todos: Todo[]
}

export const initialState: TodoState = {
  todos: []
}

export function todoReducer(state = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case TodoActionTypes.ADD:
      return {
        ...state,
        todos: produce(state.todos, draft => { draft.push(action.payload.todo) })
      }

    case TodoActionTypes.DELETE:
      return {
        ...state,
        todos: produce(state.todos, draft => {
          draft.splice(action.payload.index, 1)
        })
      }
    default:
      return state
  }
}
