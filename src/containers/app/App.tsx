import * as React from 'react'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    )
  }
}

export default App
