import { Http } from './http'
import { Post } from '../models'

export class PostHttp {
  private static http = new Http()

  static get() {
    return this.http.get<Post[]>('posts')
  }
}
