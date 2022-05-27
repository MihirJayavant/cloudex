import { IBuilder } from "./docker-creator";

export class JSDockerIgnore implements IBuilder {
  build() {
    return `Dockerfile
    .dockerignore
    node_modules
    npm-debug.log
    README.md
    .next
    .git
    .cache
    dist
    .vscode
    e2e
    `.replaceAll(" ", "").split('\n')
  }

}
