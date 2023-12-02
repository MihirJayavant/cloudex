import { Http } from './http'
import { Post } from '../models'

export class PostHttp {
  private static baseUrl = 'https://jsonplaceholder.typicode.com/'
  static get() {
    return Http.get<Post[]>(this.baseUrl + 'posts')
  }
}
