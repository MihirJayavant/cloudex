import * as React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div>Home page</div>
        <Link to="/todo">Todo</Link>
        <Link to="/posts">Posts</Link>
      </div>
    )
  }
}

export default HomePage
