import { json2yaml } from '../files'
import { IBuilder, DockerCreator } from './docker-creator'

interface IOption {
  dotnet: string
}
export class AspBuilder implements IBuilder {
  constructor(private option: IOption) {}

  build() {
    const d = new DockerCreator()
      .from(`mcr.microsoft.com/dotnet/sdk:${this.option.dotnet}-alpine`, 'builder')
      .workDir('/source')
      .copy('*.sln', '.')
      .copy('*.csproj', '.')
      .run('dotnet restore -r linux-musl-x64 /p:PublishReadyToRun=true')
      .copy('.', '.')
      .run(
        'dotnet publish -c release -o /app -r linux-musl-x64 --self-contained true --no-restore /p:PublishTrimmed=true /p:PublishReadyToRun=true /p:PublishSingleFile=true',
      )
      .from(`mcr.microsoft.com/dotnet/runtime-deps:${this.option.dotnet}-alpine-amd64`)
      .workDir('/app')
      .copy('/app', '.', 'builder')
      .entrypoint('./aspnetapp')

    return d.create()
  }
}

export class AspComposeBuilder implements IBuilder {
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
          ports: ['5100:80'],
        },
      },
    }
    return json2yaml(json)
  }
}
