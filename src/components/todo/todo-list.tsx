import React from 'react'
import { TodoItem } from './todo-item'
import { Todo } from '../../models'
import { Flex } from '@chakra-ui/react'
import { ForEach } from '../core'

interface IProps {
  list: Todo[]
  itemClick: (index: number) => void
}

function todoList(props: IProps) {
  return (
    <Flex direction="column">
      <ForEach list={props.list}>{data => <TodoItem click={props.itemClick} data={data} key={data.id} />}</ForEach>
    </Flex>
  )
}

export const TodoList = React.memo(todoList, (prev, next) => prev.list === next.list)
