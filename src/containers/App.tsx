import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'

const router = createBrowserRouter([
  {
    path: 'home',
    lazy: () => import('./home-page'),
  },
  {
    path: 'todo',
    lazy: () => import('./todo-page'),
  },
  {
    path: 'posts',
    lazy: () => import('./post-page'),
  },
  {
    path: 'docker/:application',
    lazy: () => import('./docker-page'),
  },
  {
    path: 'kubernetes/:id',
    lazy: () => import('./kubernetes-page'),
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: 'react-demo',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />
  }
}

export default App
