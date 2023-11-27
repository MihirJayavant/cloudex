import React from 'react'
import { TodoCaption, TodoList } from '../components/todo'
import { todo } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export function TodoPage() {
  const todos = useSelector(todo.selectTodos)
  const dispatch = useDispatch()

  const onAddClick = (value: string) => {
    if (value.trim() === '') {
      return
    }
    dispatch(todo.add({ id: Math.random() * 1000, value }))
  }

  const onItemClick = (index: number) => {
    dispatch(todo.remove(index))
  }

  return (
    <div className="scroll-y page">
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Todo Page</h1>
            <h2 className="subtitle">create a todo list</h2>
          </div>
        </div>
      </section>
      <section className="m5">
        <div className="flex">
          <TodoCaption onAdd={onAddClick} />
        </div>
      </section>
      <section>
        <TodoList itemClick={onItemClick} list={todos} />
      </section>
    </div>
  )
}

export function Component() {
  return <TodoPage />
}

Component.displayName = 'TodoPage'
