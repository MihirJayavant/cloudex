export class DockerCreator {
  file: string[] = []

  from(image: string, as?: string) {
    let temp =  `FROM ${image}`
    if(as) {
      temp += ` as ${as}`
    }
    this.file.push(temp)
    return this
  }

  workDir(dir: string) {
    this.file.push(`WORKDIR ${dir}`)
    return this
  }

  copy(from: string, to: string, fromContainer?: string) {
    let temp =  "COPY"
    if(fromContainer) {
      temp += ` --from=${fromContainer}`
    }
    this.file.push(`${temp} ${from} ${to}`)
    return this
  }

  run(command: string) {
    this.file.push(`RUN ${command}`)
    return this
  }

  create() {
    return this.file
  }
}


export interface IBuilder {
  build: () => string[]
}
