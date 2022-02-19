import { KubProjectAddProjectAction } from '../actions'

export function* addNewKubsProjectEffect(action: KubProjectAddProjectAction) {
  yield console.log(action)
}
