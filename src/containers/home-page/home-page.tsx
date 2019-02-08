import * as React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Home Page</h1>
              <h2 className="subtitle">see all the posts</h2>
            </div>
          </div>
        </section>
        <section className="m5">
          <Link to="/todo">
            <button className="button is-link">Todo</button>
          </Link>
          <Link to="/posts">
            <button className="button is-link">Posts</button>
          </Link>
        </section>
      </div>
    )
  }
}

export default HomePage
