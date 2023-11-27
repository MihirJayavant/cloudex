export class Database {
  openRequest: IDBOpenDBRequest

  constructor(name: string, version: number) {
    this.openRequest = indexedDB.open(name, version)
  }

  createCollection(name: string, options?: IDBObjectStoreParameters) {
    const db = this.openRequest.result
    db.createObjectStore(name, options)
  }
}
