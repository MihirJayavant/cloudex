import { AngularBuilder, AngularComposeBuilder } from "../core/docker";
import { nodeVersions } from "./dockerlist.config";

export const angularConfig = {
  forms: {
    node: {
      label: '',
      type: 'select',
      list: nodeVersions
    },
    packageManager: {
      type: 'radio',
      list: [{ label: 'npm', value: 'npm' }, { label: 'yarn', value: 'yarn' }]
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
} as const
