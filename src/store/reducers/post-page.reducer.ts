import { List } from 'immutable'
import { Post, AsyncDataState } from '../../models'
import { PostsAction, PostsActionTypes } from '../actions'

export interface PostState {
  posts: List<Post>
  dataState: AsyncDataState
}

export const initialState: PostState = {
  posts: List([]),
  dataState: AsyncDataState.INITIAL
}

export function postsReducer(state = initialState, action: PostsAction): PostState {
  switch (action.type) {
    case PostsActionTypes.LOAD:
      return {
        ...state,
        dataState: AsyncDataState.LOADING
      }

    case PostsActionTypes.SUCCESS:
      return {
        ...state,
        posts: List(action.payload.posts),
        dataState: AsyncDataState.LOADED
      }

    case PostsActionTypes.ERROR:
      return {
        ...state,
        dataState: AsyncDataState.ERROR
      }
    default:
      return state
  }
}
