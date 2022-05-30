import { AngularBuilder, AngularComposeBuilder, AngularDevBuilder, AngularDevComposeBuilder, JSDockerIgnore } from '../core/docker'
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
      title: 'DockerFile'
    },
    {
      fileName: 'docker-compose.yml',
      build: () => new AngularComposeBuilder(),
      filetype: 'language-yml',
      title: 'Docker Compose File'
    }, {
      fileName: '.dockerignore',
      build: () => new JSDockerIgnore(),
      filetype: '',
      title: 'Docker ignore'
    }, {
      fileName: 'Dockerfile_dev',
      build: (state) => new AngularDevBuilder(state),
      filetype: '',
      title: 'Dockerfile for dev'
    }, {
      fileName: 'docker-compose-dev.yml',
      build: (state) => new AngularDevComposeBuilder(state),
      filetype: 'language-yml',
      title: 'Docker Compose for dev'
    }
  ],
}
