import { json2yaml } from '../files'
import { IBuilder, DockerCreator } from './docker-creator'

interface IOption {
  node: string
  packageManager: 'npm' | 'yarn'
  ssr: boolean,
  mongo: boolean
  rabbitmq: boolean
}
export class AngularBuilder implements IBuilder {
  constructor(private option: IOption) { }

  ssrBuild() {
    const d = new DockerCreator()
      .from(this.option.node, 'builder')
      .workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm ci')
    } else {
      d.copy('yarn.lock', '.').run('yarn install --immutable --immutable-cache')
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
      d.copy('package-lock.json', '.').run('npm ci')
    } else {
      d.copy('yarn.lock', '.').run('yarn install --immutable --immutable-cache')
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

export class AngularDevBuilder implements IBuilder {
  constructor(private option: IOption) { }
  build() {
    const d = new DockerCreator()
      .from(this.option.node, 'builder')
      .workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm ci')
    } else {
      d.copy('yarn.lock', '.').run('yarn install --immutable --immutable-cache')
    }

    d.copy('.', '.')
      .cmd('npm', 'start')

    return d.create();
  }
}

export class AngularDevComposeBuilder implements IBuilder {
  constructor(private option: IOption) { }
  build() {
    let json: any = {
      version: '3',
      services: {
        webApp: {
          restart: 'always',
          build: {
            context: '.',
            dockerfile: 'Dockerfile_dev'
          },
          ports: ['4200:4200'],
          volumes: ['.:/app'],
          depends_on: []
        }
      }
    }

    if (this.option.mongo) {
      json = {
        ...json,
        services: {
          ...json.services,
          mongo: {
            image: 'mongo',
            volumes: ['./data:/data/db']
          }
        }
      }
      json.services.webApp.depends_on.push('mongo')
    }
    if (this.option.rabbitmq) {
      json = {
        ...json,
        services: {
          ...json.services,
          rabbitmq: {
            image: 'rabbitmq:3.8-management',
            volumes: ['./data:/data/db'],
            ports: ['8080:15672']
          }
        }
      }
      json.services.webApp.depends_on.push('rabbitmq')
    }
    return json2yaml(json);
  }
}

