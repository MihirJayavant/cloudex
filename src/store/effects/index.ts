import { takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import { addNewKubsProjectEffect, KubsAllUpdateEffect, loadKubsProjectEffect } from './kubernetes.effects'
import { loadPostsEffect } from './post-page.effects'

export function* allSagas() {
  yield takeLatest(actions.PostsActionTypes.LOAD, loadPostsEffect)
  yield takeLatest(actions.KubProjectTypes.ADD_NEW_PROJECT, addNewKubsProjectEffect)
  yield takeLatest(actions.KubProjectTypes.LOAD_PROJECTS, loadKubsProjectEffect)
  yield takeLatest(actions.KubProjectTypes.ADD_DEPLOYMENT, KubsAllUpdateEffect)
}
