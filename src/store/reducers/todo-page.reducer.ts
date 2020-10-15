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
  return produce(state, draft => {
    switch (action.type) {
      case TodoActionTypes.ADD:
        draft.todos.push(action.payload.todo)
        break;

      case TodoActionTypes.DELETE:
        draft.todos.splice(action.payload.index, 1)
        break;
    }
  })
}
