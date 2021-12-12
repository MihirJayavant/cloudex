import { State } from '../reducers'
import { createSelector } from 'reselect'

const getPostsState = (state: State) => state.posts

export const getPosts = createSelector(
  [getPostsState],
  s => s.data
)

export const getPostsDataState = createSelector(
  [getPostsState],
  s => s.dataState
)