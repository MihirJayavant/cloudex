import { todo, post } from './slices'
import * as fromKubs from './reducers/kubernetes.reducer'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { allSagas } from './effects'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    todos: todo.reducer,
    posts: post.reducer,
    kuberenetes: fromKubs.kubsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(allSagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
