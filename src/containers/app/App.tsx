import * as React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'
import { HomePage } from '../home-page'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/todo" exact component={TodoPage} />
          <Route path="/posts" exact component={PostPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
