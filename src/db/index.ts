export class Database {
  db?: IDBDatabase
  get isAvailable() {
    return !!window.indexedDB
  }

  open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('cloudex', 1)
      request.onerror = event => reject(event)
      request.onsuccess = () => {
        this.db = request.result
        resolve(undefined)
      }
      request.onupgradeneeded = (event: any) => {
        const db: IDBDatabase = event?.target?.result
        db.createObjectStore('kubernetes', { keyPath: 'id', autoIncrement: true })
      }
    })
  }

  add<T>(storeName: string, data: T) {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        return reject()
      }
      const request = this.db.transaction([storeName], 'readwrite').objectStore(storeName).add(data)
      request.onsuccess = () => resolve(undefined)
      request.onerror = event => reject(event)
    })
  }
}
