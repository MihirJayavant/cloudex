import React from 'react'
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'
import { HomePage } from '../home-page'
import { DockerPage } from '../docker-page'
import { KuberentesPage } from '../kubernetes-page'
import { NotFoundPage } from '../NotFoundPage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/docker/:application" element={<DockerPage />} />
            <Route path="/kubernetes/:id" element={<KuberentesPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/react-demo" element={<Navigate to="/home" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
