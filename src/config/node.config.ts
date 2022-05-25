import { NodeBuilder, NodeComposeBuilder } from '../core/docker'
import { DockerAppConfig, nodeVersions } from './config'

export const nodeConfig: DockerAppConfig = {
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
  },
  builder: [
    {
      fileName: 'dockerfile',
      build: (state: any) => new NodeBuilder(state),
      filetype: 'language-dockerfile',
      title: 'DockerFile'
    },
    {
      fileName: 'docker-compose.yml',
      build: () => new NodeComposeBuilder(),
      filetype: 'language-yml',
      title: 'DockerFile'
    },
  ],
}
