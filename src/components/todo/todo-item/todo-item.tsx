import * as React from 'react'
import { Todo } from '../../../models/todo.model'

interface ITodoItemProps {
  index: number
  data: Todo
  click: (index: number) => void
}

const todoItem = (props: ITodoItemProps) => {
  return (
    <div className="todoItem" onClick={() => props.click(props.index)}>
      <div className="react-card">
        <div>{props.data.value}</div>
      </div>
    </div>
  )
}

export default todoItem
