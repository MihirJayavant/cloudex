import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../models'
import { RootState } from '../store'

interface State {
  data: Todo[]
}

const initialState: State = {
  data: [],
}

export const slice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.data.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.data.findIndex(p => p.id === action.payload)
      state.data.splice(index, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = slice.actions

export const select = (state: RootState) => state.todos.data

export const reducer = slice.reducer
