import * as React from 'react'
import { connect } from 'react-redux'
import { TodoCaption, TodoList } from '../../components/todo'
import { Todo } from '../../models'
import { State, getTodos, addTodo, TodoAction, deleteTodo } from '../../store'

interface ITodoPageProps {
  todos: Todo[]
  add: (value: string) => TodoAction
  delete: (id: number) => TodoAction
}

class TodoPage extends React.Component<ITodoPageProps> {
  onAddClick = (value: string) => {
    if (value.trim() === '') {
      return
    }
    this.props.add(value)
  }

  onItemClick = (index: number) => {
    this.props.delete(index)
  }

  render() {
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
            <TodoCaption onAdd={this.onAddClick} />
          </div>
        </section>
        <section>
          <TodoList itemClick={this.onItemClick} list={this.props.todos} />
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  add: addTodo,
  delete: deleteTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)
