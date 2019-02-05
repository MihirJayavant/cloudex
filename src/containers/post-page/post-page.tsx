import * as React from 'react'
import { PostList } from '../../components/post'
import { PostHttp } from '../../http'
import { List } from 'immutable'
import { Post } from '../../models'

interface IPostPageState {
  list: List<Post>
}

class PostPage extends React.Component<{}, IPostPageState> {
  state = {
    list: List<Post>([])
  }

  componentDidMount() {
    new PostHttp().get().then(post => this.setState({ list: List(post) }))
  }

  render() {
    return (
      <div className="scroll-y page">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Posts Page</h1>
              <h2 className="subtitle">see all the posts</h2>
            </div>
          </div>
        </section>
        <section className="m5">
          <PostList list={this.state.list} />
        </section>
      </div>
    )
  }
}

export default PostPage
