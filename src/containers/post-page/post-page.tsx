import * as React from 'react'
import { PostList } from '../../components/post'
import { Post, AsyncDataStateType } from '../../models'
import { post } from '../../store'
import { useSelector } from 'react-redux'

function PostPage() {
  const posts = useSelector(post.selectPost)

  React.useEffect(() => {
    post.fetchPost()
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
        <PostList list={posts.data} />
      </section>
    </div>
  )
}

export default PostPage
