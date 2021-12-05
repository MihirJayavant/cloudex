import * as React from 'react'
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'
import { HomePage } from '../home-page'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/todo" element={<TodoPage/>}/>
            <Route path="/posts" element={<PostPage/>}/>
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
