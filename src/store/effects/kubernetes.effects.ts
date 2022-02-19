import { Database } from '../../db'
import { KubProjectAddProjectAction } from '../actions'

export function* addNewKubsProjectEffect(action: KubProjectAddProjectAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    yield database.add('kubernetes', { name: action.name })
  }
}
