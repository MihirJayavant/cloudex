import React from 'react'
import { TodoCaption, TodoList } from '../components/todo'
import { todo } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

export function TodoPage() {
  const todos = useSelector(todo.selectTodos)
  const dispatch = useDispatch()

  const onAddClick = (value: string) => {
    if (value.trim() === '') {
      return
    }
    dispatch(todo.add({ id: Math.random() * 1000, value }))
  }

  const onItemClick = (id: number) => {
    dispatch(todo.remove(id))
  }

  return (
    <Flex direction="column">
      <Header title="Todo" subTitle="Create Todo List" />
      <div className="scroll-y page">
        <section>
          <div className="flex m5">
            <TodoCaption onAdd={onAddClick} />
          </div>
        </section>
        <section>
          <TodoList itemClick={onItemClick} list={todos} />
        </section>
      </div>
    </Flex>
  )
}

export function Component() {
  return <TodoPage />
}

Component.displayName = 'TodoPage'
