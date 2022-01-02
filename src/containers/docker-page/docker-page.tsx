import * as React from 'react'
import { Flex, FormControl, FormLabel, Select, Button, RadioGroup, Stack, Radio, Switch } from '@chakra-ui/react'
// import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { angularConfig } from '../../config/angular.config'
import { CodeFileList } from '../../components/dockerlist'

function DockerPage() {
  // const params = useParams()

  const [files, setFiles] = React.useState<{ text: string[]; fileType: string }[]>([])

  const generateDockerfile = async () => {
    const w = window as any
    const temp: any[] = []
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

      <Flex direction="row" justifyContent="space-evenly">
        <Flex direction="column" maxWidth={800} minWidth={300}>
          <FormControl display="flex" alignItems="center" margin={5}>
            <FormLabel htmlFor="nodeVersion">Node Version</FormLabel>
            <Select id="nodeVersion" defaultValue={16}>
              <option value={16}>v16</option>
              <option value={14}>v14</option>
            </Select>
          </FormControl>
          <FormControl display="flex" alignItems="center" margin={5}>
            <RadioGroup defaultValue="npm">
              <Stack spacing={4} direction="row">
                <Radio value="npm">npm</Radio>
                <Radio value="yarn">yarn</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl display="flex" alignItems="center" margin={5}>
            <FormLabel htmlFor="ssr-docker-id" mb="0">
              Server side rendering enabled?
            </FormLabel>
            <Switch id="ssr-docker-id" />
          </FormControl>
          <FormControl margin={5}>
            <Button colorScheme="teal" size="md" onClick={generateDockerfile}>
              Generate
            </Button>
          </FormControl>
        </Flex>
        <CodeFileList files={files} />
      </Flex>
    </div>
  )
}

export default DockerPage
