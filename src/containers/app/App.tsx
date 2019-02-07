import * as React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'
import { HomePage } from '../home-page'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/todo" component={TodoPage} />
            <Route path="/posts" component={PostPage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
