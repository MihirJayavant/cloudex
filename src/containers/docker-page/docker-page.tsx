import * as React from 'react'
import { Box, Flex, FormControl, FormLabel, Select, Button, Container } from '@chakra-ui/react'
import { AngularBuilder, AngularComposeBuilder } from '../../core/docker'
// import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

declare const hljs: any

function DockerPage() {
  // const params = useParams()

  const [file, setFile] = React.useState<string[]>([])
  const [compose, setCompose] = React.useState<string[]>([])

  const generateDockerfile = () => {
    setFile(new AngularBuilder().build())
    setCompose(new AngularComposeBuilder().build())
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

      <Container>
        <Flex direction="column" justifyContent="space-between">
          <Flex direction="column" justifyContent="space-between">
            <FormControl>
              <FormLabel htmlFor="nodeVersion">Node Version</FormLabel>
              <Select id="nodeVersion" placeholder="Select Version">
                <option>Node 16</option>
                <option>Node 14</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="packageRun">Package</FormLabel>
              <Select id="packageRun" placeholder="Select package">
                <option>Yarn</option>
                <option>Npm</option>
              </Select>
            </FormControl>
            <FormControl mt={5}>
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
      </Container>
    </div>
  )
}

export default DockerPage
