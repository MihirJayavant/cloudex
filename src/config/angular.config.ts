import { AngularBuilder, AngularComposeBuilder } from "../core/docker";
import { DockerAppConfig, nodeVersions } from "./config";

export const angularConfig: DockerAppConfig = {
  forms: {
    node: {
      label: '',
      type: 'select',
      list: nodeVersions
    },
    packageManager: {
      label: '',
      type: 'radio',
      list: [{ display: 'npm', value: 'npm', isDefault: true }, { display: 'yarn', value: 'yarn', isDefault: false }]
    },
    ssr: {
      label: '',
      type: 'toggle',
      default: false
    }
  },
  builder: [{
    fileName: 'dockerfile',
    build: () => new AngularBuilder(),
    filetype: 'language-dockerfile'
  },{
    fileName: 'docker-compose.yml',
    build: () => new AngularComposeBuilder(),
    filetype: 'language-yml'
  }]
}
