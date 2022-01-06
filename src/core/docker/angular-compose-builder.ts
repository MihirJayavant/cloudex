import { json2yaml } from "../files";
import { IBuilder } from "./docker-creator";

export class AngularComposeBuilder implements IBuilder {
  build() {
    const json = {
      version: '3',
      services: {
        webApp: {
          restart: 'always',
          build: {
            context: '.',
            dockerfile: 'Dockerfile'
          },
          ports: ['5100:80']
        }
      }
    }
    return json2yaml(json);
  }
}
