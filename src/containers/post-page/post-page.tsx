import * as React from 'react'
import { connect } from 'react-redux'
import { PostList } from '../../components/post'
import { Post, AsyncDataStateType } from '../../models'
import { State, getPosts, getPostsDataState, loadPosts, LoadPostsAction } from '../../store'

interface IProps {
  posts: Post[]
  dataState: AsyncDataStateType
  load: () => LoadPostsAction
}

function PostPage(props: IProps) {
  React.useEffect(() => {
    props.load()
  }, [])

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
        <PostList list={props.posts} />
      </section>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  posts: getPosts(state),
  dataState: getPostsDataState(state),
})

const mapDispatchToProps = {
  load: loadPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
