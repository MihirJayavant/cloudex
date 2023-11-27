import React from 'react'
import { PostList } from '../components/post'
import { post } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

export function PostPage() {
  const posts = useSelector(post.selectPost)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch<any>(post.fetchPost())
  }, [])

  return (
    <div className="scroll-y page">
      <Flex direction="column">
        <Header title="Posts" subTitle="See all Posts" />
        <section className="m5">
          <PostList list={posts.data} />
        </section>
      </Flex>
    </div>
  )
}

export function Component() {
  return <PostPage />
}

Component.displayName = 'PostPage'
