import { JSDockerIgnore, ReactBuilder, ReactComposeBuilder } from '../core/docker'
import { DockerAppConfig, nodeVersions } from './config'

export const reactConfig: DockerAppConfig = {
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
      build: (state: any) => new ReactBuilder(state),
      filetype: 'language-dockerfile',
      title: 'DockerFile',
    },
    {
      fileName: 'docker-compose.yml',
      build: () => new ReactComposeBuilder(),
      filetype: 'language-yml',
      title: 'Docker Compose File',
    },
    {
      fileName: '.dockerignore',
      build: () => new JSDockerIgnore(),
      filetype: '',
      title: 'Docker ignore',
    },
  ],
}
