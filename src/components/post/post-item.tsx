import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  title: string
  body: string
}

function postItem(props: IProps) {
  return (
    <Card m="5px" variant="outline">
      <CardBody>
        <Heading>{props.title}</Heading>
        <Text>{props.body}</Text>
      </CardBody>
    </Card>
  )
}

export const PostItem = React.memo(postItem)
