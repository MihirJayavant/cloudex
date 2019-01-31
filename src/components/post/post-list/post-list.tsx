import * as React from 'react'
import PostItem from '../post-item/post-item'
import { Post } from '../../../models'

interface PostListProps {
  list: Post[]
}

const postList = (props: PostListProps) => {
  const list = props.list.map(post => (
    <div className="column is-4" key={post.id}>
      <PostItem title={post.title} body={post.body} />
    </div>
  ))

  return <div className="columns is-multiline">{list}</div>
}

export default React.memo(postList)