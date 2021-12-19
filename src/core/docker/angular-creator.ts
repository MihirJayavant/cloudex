
import { IBuilder, DockerCreator } from "./docker-creator";

export class AngularCreator implements IBuilder{
  build() {
    return new DockerCreator()
      .from('node:12-alpine', 'builder')
      .workDir('/app')
      .copy('package.json', '.')
      .copy('yarn.lock', '.')
      .run('yarn')
      .copy('.', '.')
      .run('npm run build')
      .from('nginx')
      .copy('nginx/default.conf', '/etc/nginx/conf.d/default.conf')
      .copy('/app/dist/Shop', '/usr/share/nginx/html', 'builder')
      .create();
  }

}
