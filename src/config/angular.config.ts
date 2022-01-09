import { AngularBuilder, AngularComposeBuilder } from '../core/docker'
import { DockerAppConfig, nodeVersions } from './config'

export const angularConfig: DockerAppConfig = {
  form: {
    node: {
      label: 'Node Version: ',
      type: 'select',
      list: nodeVersions,
      default: 'node:16-alpine',
    },
    packageManager: {
      label: '',
      type: 'radio',
      list: [
        { display: 'npm', value: 'npm' },
        { display: 'yarn', value: 'yarn' },
      ],
      default: 'npm',
    },
    ssr: {
      label: 'Is server side rendering enabled?',
      type: 'toggle',
      default: false,
    },
  },
  builder: [
    {
      fileName: 'dockerfile',
      build: (state: any) => new AngularBuilder(state),
      filetype: 'language-dockerfile',
    },
    {
      fileName: 'docker-compose.yml',
      build: () => new AngularComposeBuilder(),
      filetype: 'language-yml',
    },
  ],
}
