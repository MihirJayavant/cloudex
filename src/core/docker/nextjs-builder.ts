import { json2yaml } from '../files'
import { IBuilder, DockerCreator } from './docker-creator'

interface IOption {
  node: string
  packageManager: 'npm' | 'yarn'
}
export class NextjsBuilder implements IBuilder {
  constructor(private option: IOption) {}

  build() {
    const d = new DockerCreator().from(this.option.node, 'deps').run('apk add --no-cache libc6-compat').workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm ci')
    } else {
      d.copy('yarn.lock', '.').run('yarn install --immutable --immutable-cache')
    }

    d.from(this.option.node, 'builder')
      .workDir('/app')
      .copy('/app/node_modules', './node_modules', 'deps')
      .copy('.', '.')
      .arg('APP_ENV')
      .run('npm run build:${APP_ENV}')
      .from(this.option.node)
      .workDir('/app')
      .env('NODE_ENV production')
      .run('addgroup -g 1001 -S nodejs')
      .run('adduser -S nextjs -u 1001')
      .copy('/app/public', './public', 'builder')
      .copy('/app/package.json', './package.json', 'builder')
      .copy('/app/.next/standalone', './', 'builder --chown=nextjs:nodejs')
      .copy('/app/.next/static', './.next/static', 'builder --chown=nextjs:nodejs')
      .user('nextjs')
      .expose(3000)
      .env('PORT 3000')
      .env('NEXT_TELEMETRY_DISABLED 1')
      .cmd('node', 'server.js')

    return d.create()
  }
}

export class NextjsComposeBuilder implements IBuilder {
  build() {
    const json = {
      version: '3',
      services: {
        webApp: {
          restart: 'always',
          build: {
            context: '.',
            dockerfile: 'Dockerfile',
          },
          ports: ['3000:80'],
        },
      },
    }
    return json2yaml(json)
  }
}
