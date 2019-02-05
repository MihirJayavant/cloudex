import * as React from 'react'
import { TodoCaption, TodoList } from '../../components/todo'
import { Todo } from '../../models'
import { List } from 'immutable'

interface ITodoPageState {
  list: List<Todo>
  value: string
  lastKey: number
}
class TodoPage extends React.Component<{}, ITodoPageState> {
  state = {
    list: List<Todo>([]),
    value: '',
    lastKey: -1
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    })
  }

  onAddClick = () => {
    const value = this.state.value
    if (value.trim() === '') {
      return
    }
    const id = this.state.lastKey + 1
    const temp = this.state.list.push({ id, value: this.state.value })
    this.setState({
      list: temp,
      value: '',
      lastKey: id
    })
  }

  onItemClick = (index: number) => {
    const temp = this.state.list.remove(index)
    this.setState({
      list: temp
    })
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
            <TodoCaption click={this.onAddClick} change={this.onChange} value={this.state.value} />
          </div>
        </section>
        <section>
          <TodoList itemClick={this.onItemClick} list={this.state.list} />
        </section>
      </div>
    )
  }
}

export default TodoPage
