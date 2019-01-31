import axios from 'axios'

export class Http {
  private baseUrl = 'https://jsonplaceholder.typicode.com/'

  async get<T>(endpoint: string) {
    const res = await axios.get<T>(this.baseUrl + endpoint)
    return res.data
  }
}
