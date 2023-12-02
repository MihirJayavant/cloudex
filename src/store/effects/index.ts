import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit'
import { AsyncDataStateType, IAsyncData } from '../../models'

export * as kubernetes from './kubernetes.effects'

export function addBuilders<T, U extends IAsyncData<T>>(builder: ActionReducerMapBuilder<U>, thunks: AsyncThunk<any, any, any>) {
  builder.addCase(thunks.pending, state => {
    state.dataState = AsyncDataStateType.LOADING
  })
  builder.addCase(thunks.fulfilled, (state, action) => {
    state.data = action.payload
    state.dataState = AsyncDataStateType.LOADED
  })
  builder.addCase(thunks.rejected, state => {
    state.dataState = AsyncDataStateType.ERROR
  })
}
