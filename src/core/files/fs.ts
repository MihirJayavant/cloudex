export interface IFile {
  text: string[]
  fileType: string
  title: string
}

export class FS {
  dir: any

  isAvailable() {
    const w = window as any
    return !!w.showDirectoryPicker
  }

  async openOrCreateDir() {
    const w = window as any
    this.dir = await w.showDirectoryPicker()
  }

  async fileWrite(fileName: string, content: string[]) {
    const file = await this.dir.getFileHandle(fileName, { create: true })
    const writable = await file.createWritable()
    await writable.write(content.join('\n'))
    await writable.close()
  }
}
