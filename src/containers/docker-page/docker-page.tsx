import * as React from 'react'
import { AngularCreator } from '../../core/docker/angular-creator'

declare const hljs: any

function DockerPage() {
  const [file, setFile] = React.useState<string[]>([])

  const generateDockerfile = () => {
    setFile(new AngularCreator().build())
    setTimeout(() => hljs.highlightAll(), 0)
  }

  const lines = (file: string[]) => {
    return file.map((p, i) => (
      <div key={i}>
        {p} {'\n'}
      </div>
    ))
  }

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
      <main>
        <section>
          <article className="message">
            <div className="message-body">Generate dockerfile for Angular application</div>
          </article>
        </section>
        <section>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <button className="button is-large is-primary" onClick={generateDockerfile}>
                Generate docker files
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              <div className="field">
                <div className="control">
                  <pre>
                    <code className="language-dockerfile">{lines(file)}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DockerPage
