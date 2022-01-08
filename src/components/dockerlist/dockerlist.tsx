import * as React from 'react'
import { Grid, Flex, Divider, Box } from '@chakra-ui/react'
import DockerItem from './dockeritem'
import { dockerlistConfig } from '../../config/dockerlist.config'

interface IProps {
  gotoDockerPage: (app: string) => void
}

const DockerList = (props: IProps) => {
  const { gotoDockerPage } = props

  const frontEndList = () => dockerlistConfig.frontEndApps.map(p => <DockerItem key={p.name} name={p.name} title={p.title} icon={p.icon} onClick={gotoDockerPage} />)

  const backEndList = () => dockerlistConfig.backEndApps.map(p => <DockerItem key={p.name} name={p.name} title={p.title} icon={p.icon} onClick={gotoDockerPage} />)

  return (
    <Flex width="100%">
      <Flex flexDirection="column" width="100%">
        <Box mb={5}>Front End</Box>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
          gap={6}
          py={8}
          px={10}
          style={{ height: "max-content" }}
        >
          {frontEndList()}
        </Grid>
      </Flex>
      <Box>
        <Divider orientation='vertical' borderColor="blue.400" />
      </Box>
      <Flex flexDirection="column" width="100%">
        <Box mb={5}>Back End</Box>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
            md: 'repeat(1, 1fr)',
          }}
          gap={6}
          py={8}
          px={10}
          style={{ height: "max-content" }}
        >
          {backEndList()}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default DockerList
