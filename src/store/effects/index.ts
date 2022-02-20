import { takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import { addNewKubsProjectEffect } from './kubernetes.effects'
import { loadPostsEffect } from './post-page.effects'

export function* allSagas() {
  yield takeLatest(actions.PostsActionTypes.LOAD, loadPostsEffect)
  yield takeLatest(actions.KubProjectTypes.ADD_NEW_PROJECT, addNewKubsProjectEffect)
}
