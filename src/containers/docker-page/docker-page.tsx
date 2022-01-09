import * as React from 'react'
import { Flex, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { angularConfig } from '../../config/angular.config'
import { CodeFileList } from '../../components/dockerlist'
import { FormBuilder } from '../../components/Forms/FormBuilder'
import { FS, IFile } from '../../core/files'
import { dockerlistConfig } from '../../config/dockerlist.config'

function DockerPage() {
  const params = useParams()

  const [files, setFiles] = React.useState<IFile[]>([])
  const toast = useToast()
  const generateDockerfile = async (state: any) => {
    try {
      const temp: IFile[] = []
      const fs = new FS()
      if (fs.isAvailable()) {
        await fs.openOrCreateDir()
      }
      for (const step of angularConfig.builder) {
        const docker = step.build(state).build()
        temp.push({ text: docker, fileType: step.filetype })
        if (fs.isAvailable()) {
          await fs.fileWrite(step.fileName, docker)
        }
      }

      if (fs.isAvailable()) {
        toast({
          title: 'Files created.',
          description: "We've created docker files in your selected directory.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
      setFiles(temp)
    } catch (error: any) {
      console.log(error)
      toast({
        title: 'Error',
        description: 'Try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const getConfig = () => {
    const all = [...dockerlistConfig.frontEndApps, ...dockerlistConfig.backEndApps]
    const app = all.find(p => p.name === params.application)
    return app ? app.option.form : all[0].option.form
  }

  return (
    <div>
      <Header />

      <Flex mt={10} direction="row" justifyContent="space-evenly">
        <FormBuilder form={getConfig()} generate={generateDockerfile} />
        <CodeFileList files={files} />
      </Flex>
    </div>
  )
}

export default DockerPage
