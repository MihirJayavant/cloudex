import { put } from 'redux-saga/effects'
import { PostsActionTypes, SuccessPostsAction, ErrorPostsAction } from '../actions'
import { Post } from '../../models'
import { PostHttp } from '../../http'

export function* loadPostsEffect() {
  try {
    const data: Post[] = yield new PostHttp().get()
    yield put<SuccessPostsAction>({
      type: PostsActionTypes.SUCCESS,
      data
    })
  } catch (error: any) {
    yield put<ErrorPostsAction>({
      type: PostsActionTypes.ERROR,
      error
    })
  }
}
