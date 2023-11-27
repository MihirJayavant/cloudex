import React from 'react'
import { Todo } from '../../models/todo.model'
import { Card, CardBody, Text } from '@chakra-ui/react'

interface IProps {
  data: Todo
  click: (index: number) => void
}

export function TodoItem(props: IProps) {
  return (
    <Card onClick={() => props.click(props.data.id)} m="5px" variant="outline">
      <CardBody>
        <Text>{props.data.value}</Text>
      </CardBody>
    </Card>
  )
}
