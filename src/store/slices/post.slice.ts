import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncDataStateType, IAsyncData, Post, getInitialState } from '../../models'
import { RootState } from '../store'
import { PostHttp } from '../../http'

interface State extends IAsyncData<Post[]> {}

const initialState: State = {
  ...getInitialState<Post[]>([]),
}

export const fetchPost = createAsyncThunk('post/fetch', async () => {
  const data: Post[] = await PostHttp.get()
  return data
})

export const slice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.dataState = AsyncDataStateType.LOADING
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.data = action.payload
      state.dataState = AsyncDataStateType.LOADED
    })
    builder.addCase(fetchPost.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.toString()
      state.dataState = AsyncDataStateType.ERROR
    })
  },
})

export const select = (state: RootState) => state.posts

export const reducer = slice.reducer
