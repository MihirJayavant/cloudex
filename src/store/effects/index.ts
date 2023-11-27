import { takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import { addNewKubsProjectEffect, KubsAllUpdateEffect, KubsGenerateFilesEffect, loadKubsProjectEffect } from './kubernetes.effects'

export function* allSagas() {
  yield takeLatest(actions.KubProjectTypes.ADD_NEW_PROJECT, addNewKubsProjectEffect)
  yield takeLatest(actions.KubProjectTypes.LOAD_PROJECTS, loadKubsProjectEffect)
  yield takeLatest(actions.KubProjectTypes.ADD_DEPLOYMENT, KubsAllUpdateEffect)
  yield takeLatest(actions.KubProjectTypes.ADD_SECRETS, KubsAllUpdateEffect)
  yield takeLatest(actions.KubProjectTypes.GENERATE_FILES, KubsGenerateFilesEffect)
}
