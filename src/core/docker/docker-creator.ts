export class DockerCreator {
  file: string[] = []

  from(image: string, as?: string) {
    let temp = `FROM ${image}`
    if (as) {
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
    let temp = "COPY"
    if (fromContainer) {
      temp += ` --from=${fromContainer}`
    }
    this.file.push(`${temp} ${from} ${to}`)
    return this
  }

  run(command: string) {
    this.file.push(`RUN ${command}`)
    return this
  }

  expose(port: number) {
    this.file.push(`EXPOSE ${port}`)
    return this
  }

  arg(variable: string) {
    this.file.push(`ARG ${variable}`)
    return this
  }

  cmd(...commands: string[]) {
    const temp = commands.map(p => `"${p}"`).join(", ")
    this.file.push(`CMD [${temp}]`)
    return this
  }

  create() {
    return this.file
  }
}


export interface IBuilder {
  build: () => string[]
}
