import * as React from 'react'
import TodoCaption from '../../components/todo/todo-caption/todo-caption'
import TodoList from '../../components/todo/todo-list/todo-list'

class TodoPage extends React.Component {
  state = {
    list: [],
    value: '',
    lastKey: -1
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    })
  }

  onClick = () => {
    const id = this.state.lastKey + 1
    const temp = [...this.state.list, { id, value: this.state.value }]
    this.setState({
      list: temp,
      value: '',
      lastKey: id
    })
  }

  render() {
    return (
      <div>
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
            <TodoCaption click={this.onClick} change={this.onChange} value={this.state.value} />
          </div>
        </section>
        <section>
          <TodoList list={this.state.list} />
        </section>
      </div>
    )
  }
}

export default TodoPage
