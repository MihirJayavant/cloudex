import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../models'
import { RootState } from '../store'

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos.todos

export const reducer = todoSlice.reducer
