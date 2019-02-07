import { takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import { loadPostsEffect } from './post-page.effects'

export function* allSagas() {
  yield takeLatest(actions.PostsActionTypes.LOAD, loadPostsEffect)
}
