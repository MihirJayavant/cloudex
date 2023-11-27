import React from 'react'
import { PostItem } from './post-item'
import { Post } from '../../models'
import { SimpleGrid } from '@chakra-ui/react'
import { ForEach } from '../core'

interface IPostListProps {
  list: Post[]
}

function postList(props: IPostListProps) {
  return (
    <SimpleGrid spacing={5} columns={3}>
      <ForEach list={props.list}>
        {post => (
          <div key={post.id}>
            <PostItem title={post.title} body={post.body} />
          </div>
        )}
      </ForEach>
    </SimpleGrid>
  )
}

export const PostList = React.memo(postList)
