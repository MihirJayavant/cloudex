import React, { Component } from "react";
import TodoCaption from "./todo-caption/todo-caption";
import TodoList from "./todo-list/todo-list";

class TodoPage extends Component {
  state = {
    list: [],
    value: "",
    lastKey: -1
  };

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  onClick = () => {
    const id = this.state.lastKey + 1;
    const temp = [...this.state.list, { id, value: this.state.value }];
    this.setState({
      list: temp,
      value: "",
      lastKey: id
    });
  };

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
            <TodoCaption
              click={this.onClick}
              change={this.onChange}
              value={this.state.value}
            />
          </div>
        </section>
        <section>
          <TodoList list={this.state.list} />
        </section>
      </div>
    );
  }
}

export default TodoPage;
