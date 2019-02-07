import { createStore } from 'redux'
import { State, reducer } from './reducers'

export * from './reducers'
export * from './actions'
export * from './selectors'

export const store = createStore(reducer)
