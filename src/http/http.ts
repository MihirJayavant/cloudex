export class Http {
  static async get<T>(url: string) {
    const res = await fetch(url)
    return res.json() as Promise<T>
  }
}
