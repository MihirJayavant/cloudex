import { State } from '../reducers'
import { createSelector } from 'reselect'

const getKubernetesState = (state: State) => state.kuberenetes

export const getprojects = createSelector([getKubernetesState], s => s.data)
