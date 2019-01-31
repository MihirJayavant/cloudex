import { Http } from './http'
import { Post } from '../models'

export class PostHttp {
  private http = new Http()

  get() {
    return this.http.get<Post>('posts')
  }
}
