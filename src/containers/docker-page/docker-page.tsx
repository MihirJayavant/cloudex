import * as React from 'react'
import { Box, Text, Flex, FormControl, FormLabel, Select, Container } from '@chakra-ui/react'
// import { AngularCreator } from '../../core/docker/angular-creator'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

// declare const hljs: any

function DockerPage() {
  const params = useParams()

  // const [file, setFile] = React.useState<string[]>([])

  // const generateDockerfile = () => {
  //   setFile(new AngularCreator().build())
  //   setTimeout(() => hljs.highlightAll(), 0)
  // }

  // const lines = (file: string[]) => {
  //   return file.map((p, i) => (
  //     <div key={i}>
  //       {p} {'\n'}
  //     </div>
  //   ))
  // }

  return (
    // <div className="home">
    //   <header className="hero is-info is-small">
    //     <div className="hero-body">
    //       <div className="container">
    //         <h1 className="title">Cloudex</h1>
    //         <h2 className="subtitle">Contiainerize your application</h2>
    //       </div>
    //     </div>
    //   </header>
    //   <main>
    //     <section>
    //       <article className="message">
    //         <div className="message-body">Generate dockerfile for {params.application} application</div>
    //       </article>
    //     </section>
    //     <section>
    //       <div className="columns is-centered">
    //         <div className="column is-narrow">
    //           <button className="button is-large is-primary" onClick={generateDockerfile}>
    //             Generate docker files
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //     <section>
    //       <div className="columns is-centered">
    //         <div className="column is-four-fifths">
    //           <div className="field">
    //             <div className="control">
    //               <pre>
    //                 <code className="language-dockerfile">{lines(file)}</code>
    //               </pre>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    // </div>

    <Flex direction="column">
      <Header />
      <Box py={8} px={10}>
        <Text fontSize="xl" mb={4}>
          Generate dockerfile for {params.application} application
        </Text>

        <Container>
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
          </Flex>
        </Container>
      </Box>
    </Flex>
  )
}

export default DockerPage
