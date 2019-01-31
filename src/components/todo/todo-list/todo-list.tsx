import * as React from 'react'
import TodoItem from '../todo-item/todo-item'
import { Todo } from '../../../models'

interface TodoListProps {
  list: Todo[]
  itemClick: (index: number) => void
}

const todoList = (props: TodoListProps) => {
  console.log(props)
  const list = props.list.map((data, index) => (
    <TodoItem click={props.itemClick} data={data} index={index} key={data.id} />
  ))

  return (
    <div className="flex">
      <div className="flex-column"> {list} </div>
    </div>
  )
}

export default React.memo(todoList)
