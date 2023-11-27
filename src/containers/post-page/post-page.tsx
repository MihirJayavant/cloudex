import React from 'react'
import { PostList } from '../../components/post'
import { post } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

function PostPage() {
  const posts = useSelector(post.selectPost)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch<any>(post.fetchPost())
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
