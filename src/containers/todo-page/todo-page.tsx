import * as React from 'react'
import { connect } from 'react-redux'
import { TodoCaption, TodoList } from '../../components/todo'
import { Todo } from '../../models'
import { State, getTodos, addTodo, TodoAction, deleteTodo } from '../../store'

interface IProps {
  todos: Todo[]
  add: (value: string) => TodoAction
  delete: (id: number) => TodoAction
}

function TodoPage(props: IProps) {
  const onAddClick = (value: string) => {
    if (value.trim() === '') {
      return
    }
    props.add(value)
  }

  const onItemClick = (index: number) => {
    props.delete(index)
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
        <TodoList itemClick={onItemClick} list={props.todos} />
      </section>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  todos: getTodos(state),
})

const mapDispatchToProps = {
  add: addTodo,
  delete: deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)
