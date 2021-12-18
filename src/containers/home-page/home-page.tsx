import * as React from 'react'

function HomePage() {
  return (
    <div className="home">
      <header className="hero is-info is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cloudex</h1>
            <h2 className="subtitle">Contiainerize your application</h2>
          </div>
        </div>
      </header>
      <main className="m5">
        <div className="columns">
          <div className="column is-3">
            <div className="is-flex is-align-items-center is-flex-direction-column">
              <figure className="image is-128x128">
                <img
                  src="https://angular.io/assets/images/logos/angular/angular.svg"
                  alt="Angular"
                />
              </figure>
              <div>Angular</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
