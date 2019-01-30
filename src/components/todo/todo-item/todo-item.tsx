import * as React from 'react'

interface TodoItemProps {
  title: string
}

const todoItem = (props: TodoItemProps) => {
  return <div> {props.title} </div>
}

export default todoItem
