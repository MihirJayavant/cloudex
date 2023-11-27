import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DockerList } from '../../components/dockerlist'
import { Header } from '../../components/Header'
import { KubernetesList } from './kubernetes-list'

function HomePage() {
  const navigate = useNavigate()

  function gotoDockerPage(application: string) {
    navigate(`/docker/${application}`)
  }

  return (
    <Flex direction="column">
      <Header />
      <Tabs align="center" variant="solid-rounded" mt={5}>
        <TabList>
          <Tab>Docker</Tab>
          <Tab>Kubernetes</Tab>
        </TabList>
        <TabPanels marginTop={5}>
          <TabPanel>
            <DockerList gotoDockerPage={gotoDockerPage} />
          </TabPanel>
          <TabPanel>
            <KubernetesList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default HomePage
