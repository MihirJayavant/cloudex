import { Post, withReducer, IAsyncData, getInitialState } from '../../models'
import { PostsAction, PostsActionTypes } from '../actions'

export interface PostState extends IAsyncData<Post[]> {

}

export const initialState: PostState = {
  ...getInitialState<Post[]>([])
}

function baseReducer(state = initialState): PostState {
  return state;
}

export function postsReducer(state = initialState, action: PostsAction): PostState {
  return withReducer(baseReducer, {
    errorActionType: PostsActionTypes.ERROR,
    loadActionType: PostsActionTypes.LOAD,
    successActionType: PostsActionTypes.SUCCESS
  })(state, action);
}
