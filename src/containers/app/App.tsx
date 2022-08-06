import * as React from 'react'
import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom'
import { TodoPage } from '../todo-page'
import { PostPage } from '../post-page'
import { HomePage } from '../home-page'
import { DockerPage } from '../docker-page'
import { KuberentesPage } from '../kubernetes-page'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/react-demo/home" element={<HomePage />} />
            <Route path="/react-demo/todo" element={<TodoPage />} />
            <Route path="/react-demo/posts" element={<PostPage />} />
            <Route path="/react-demo/docker/:application" element={<DockerPage />} />
            <Route path="/react-demo/kubernetes/:id" element={<KuberentesPage />} />
            <Route path="/" element={<Navigate to="/react-demo/home" />} />
            <Route path="/react-demo" element={<Navigate to="/react-demo/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
