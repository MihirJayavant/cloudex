import { AddIcon } from '@chakra-ui/icons'
import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { DockerList } from '../../components/dockerlist'
import { Header } from '../../components/Header'

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
            <div>
              <Flex>
                <Box className="box" borderWidth="1px" borderRadius="lg">
                  <AddIcon w={6} h={6} margin={20} />
                </Box>
              </Flex>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default HomePage
