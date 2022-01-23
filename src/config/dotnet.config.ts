import { AspBuilder, AspComposeBuilder } from '../core/docker'
import { aspdotnetVersions, DockerAppConfig } from './config'

export const aspConfig: DockerAppConfig = {
  form: {
    dotnet: {
      label: 'Dotnet Version: ',
      type: 'select',
      list: aspdotnetVersions,
      default: '6.0',
    },
  },
  builder: [
    {
      fileName: 'dockerfile',
      build: (state: any) => new AspBuilder(state),
      filetype: 'language-dockerfile',
    },
    {
      fileName: 'docker-compose.yml',
      build: () => new AspComposeBuilder(),
      filetype: 'language-yml',
    },
  ],
}
