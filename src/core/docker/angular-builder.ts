import { json2yaml } from '../files'
import { IBuilder, DockerCreator } from './docker-creator'

interface IOption {
  node: string
  packageManager: 'npm' | 'yarn'
  ssr: boolean
}
export class AngularBuilder implements IBuilder {
  constructor(private option: IOption) { }

  ssrBuild() {
    const d = new DockerCreator()
      .from(this.option.node, 'builder')
      .workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm install')
    } else {
      d.copy('yarn.lock', '.').run('yarn')
    }

    d.copy('.', '.')
      .arg('APP_ENV')
      .run('npm run build:${APP_ENV}')
      .from(this.option.node)
      .workDir('/app')
      .copy('/app/dist', '/app/dist', 'builder')
      .expose(80)
      .cmd("node", "dist/server.js")

    return d.create()
  }

  spaBuild() {
    const d = new DockerCreator()
      .from(this.option.node, 'builder')
      .workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm install')
    } else {
      d.copy('yarn.lock', '.').run('yarn')
    }

    d.copy('.', '.')
      .arg('APP_ENV')
      .run('npm run build:${APP_ENV}')
      .from('nginx')
      .copy('nginx/default.conf', '/etc/nginx/conf.d/default.conf')
      .copy('/app/dist', '/usr/share/nginx/html', 'builder')
      .expose(80)

    return d.create()
  }

  build() {
    return this.option.ssr ? this.ssrBuild() : this.spaBuild()
  }
}


export class AngularComposeBuilder implements IBuilder {
  build() {
    const json = {
      version: '3',
      services: {
        webApp: {
          restart: 'always',
          build: {
            context: '.',
            dockerfile: 'Dockerfile'
          },
          ports: ['5100:80']
        }
      }
    }
    return json2yaml(json);
  }
}
