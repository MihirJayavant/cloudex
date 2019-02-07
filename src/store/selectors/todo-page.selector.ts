import { State } from '../reducers'
import { createSelector } from 'reselect'

const getTodoState = (state: State) => state.todos

export const getTodos = createSelector(
  [getTodoState],
  s => s.todos
)
