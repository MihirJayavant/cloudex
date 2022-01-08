import * as React from 'react'
import { Flex } from '@chakra-ui/react'
// import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { angularConfig } from '../../config/angular.config'
import { CodeFileList } from '../../components/dockerlist'
import { FormBuilder } from '../../components/FormBuilder'
import { IFile } from '../../core/files'

function DockerPage() {
  // const params = useParams()

  const [files, setFiles] = React.useState<IFile[]>([])

  const generateDockerfile = async () => {
    const w = window as any
    const temp: IFile[] = []
    const dir = await w.showDirectoryPicker()
    for (const step of angularConfig.builder) {
      const file = await dir.getFileHandle(step.fileName, { create: true })
      const docker = step.build().build() as string[]
      temp.push({ text: docker, fileType: step.filetype })
      const writable = await file.createWritable()
      await writable.write(docker.join('\n'))
      await writable.close()
    }
    setFiles(temp)
  }

  return (
    <div>
      <Header />

      <Flex mt={10} direction="row" justifyContent="space-evenly">
        <FormBuilder generate={generateDockerfile} />
        <CodeFileList files={files} />
      </Flex>
    </div>
  )
}

export default DockerPage
