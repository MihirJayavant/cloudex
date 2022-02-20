import { Database } from '../../db'
import { KubNewProjectAction } from '../actions'

export function* addNewKubsProjectEffect(action: KubNewProjectAction) {
  const database: Database = yield new Database()
  if (database.isAvailable) {
    yield database.open()
    yield database.add('kubernetes', { name: action.name })
  }
}
