import * as React from 'react'
import { PostList } from '../../components/post'
import { PostHttp } from '../../http'

class PostPage extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    new PostHttp().get().then(post => this.setState({ list: post }))
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
