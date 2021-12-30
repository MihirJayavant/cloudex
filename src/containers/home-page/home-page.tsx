import { Box, Heading, Text, Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { DockerList } from '../../components/dockerlist'

function HomePage() {
  const navigate = useNavigate()
  function gotoDockerPage(application: string) {
    navigate(`/docker/${application}`)
  }

  return (
    <Flex direction="column">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" h="30%" py={8} px={10} backgroundColor="blue.400">
        <Heading mb={4}>Cloudex</Heading>
        <Text fontSize="xl">Containerized your Application</Text>
      </Box>
      <Tabs align="center" variant="solid-rounded" mt={5}>
        <TabList>
          <Tab>Docker</Tab>
          <Tab>Kubernetes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DockerList gotoDockerPage={gotoDockerPage} />
          </TabPanel>
          <TabPanel>Kubs</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default HomePage
