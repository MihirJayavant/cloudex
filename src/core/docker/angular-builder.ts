import { IBuilder, DockerCreator } from './docker-creator'

interface IOption {
  node: string
  packageManager: 'npm' | 'yarn'
  ssr: boolean
}
export class AngularBuilder implements IBuilder {
  constructor(private option: IOption) {}

  build() {
    const d = new DockerCreator().from(this.option.node, 'builder').workDir('/app').copy('package.json', '.')

    if (this.option.packageManager === 'npm') {
      d.copy('package-lock.json', '.').run('npm install')
    } else {
      d.copy('yarn.lock', '.').run('yarn')
    }

    d.copy('.', '.')
      .run('npm run build')
      .from('nginx')
      .copy('nginx/default.conf', '/etc/nginx/conf.d/default.conf')
      .copy('/app/dist/Shop', '/usr/share/nginx/html', 'builder')

    return d.create()
  }
}
