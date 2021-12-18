import * as React from 'react'

function DockerPage() {
  return (
    <div className="home">
      <header className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cloudex</h1>
            <h2 className="subtitle">Contiainerize your application</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <article className="message">
            <div className="message-body">Generate dockerfile for Angular application</div>
          </article>
        </section>
        <section>
          <form>
            <div className="select is-primary">
              <select>
                <option selected>v16</option>
                <option>v14</option>
              </select>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default DockerPage
