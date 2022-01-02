import * as React from 'react'
import { Box, Flex, FormControl, FormLabel, Select, Button, RadioGroup, Stack, Radio, Switch } from '@chakra-ui/react'
import { AngularBuilder, AngularComposeBuilder } from '../../core/docker'
// import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

declare const hljs: any

function DockerPage() {
  // const params = useParams()

  const [file, setFile] = React.useState<string[]>([])
  const [compose, setCompose] = React.useState<string[]>([])

  const generateDockerfile = async () => {
    const w = window as any
    const dir = await w.showDirectoryPicker()
    const file = await dir.getFileHandle('dockerfile', { create: true })
    const file2 = await dir.getFileHandle('docker-compose.yml', { create: true })
    const docker = new AngularBuilder().build()
    const compose = new AngularComposeBuilder().build()
    setFile(docker)
    setCompose(compose)
    const writable = await file.createWritable()
    await writable.write(docker.join('\n'))
    await writable.close()
    const writable2 = await file2.createWritable()
    await writable2.write(compose.join('\n'))
    await writable2.close()
    setTimeout(() => hljs.highlightAll(), 0)
  }

  const lines = (file: string[]) => {
    return file.map((p, i) => (
      <div key={i}>
        {p} {'\n'}
      </div>
    ))
  }

  return (
    <div>
      <Header />

      <Flex direction="column" justifyContent="space-between">
        <Flex direction="column" justifyContent="space-between" maxWidth={500}>
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
                <Radio value="npm" isDisabled>
                  npm
                </Radio>
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
        <Box mt={5} mb={5}>
          <pre>
            <code className="language-dockerfile">{lines(file)}</code>
          </pre>
        </Box>
        <Box mt={5} mb={5}>
          <pre>
            <code className="language-yml">{lines(compose)}</code>
          </pre>
        </Box>
      </Flex>
    </div>
  )
}

export default DockerPage
