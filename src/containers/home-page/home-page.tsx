import { Box, Heading, Text, Flex, Grid, Image, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import ReactLogo from '../../assets/ReactLogo.png'
import AngularLogo from '../../assets/AngularLogo.png'

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
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                lg: 'repeat(5, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
              gap={6}
              py={8}
              px={10}
            >
              <Box
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                onClick={() => gotoDockerPage('angular')}
              >
                <Image src={AngularLogo} alt="Angular" height="150px" objectFit="cover" />
                <Box p="6">
                  <Box textAlign="center" mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    Angular
                  </Box>
                </Box>
              </Box>
              <Box
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                onClick={() => gotoDockerPage('react')}
              >
                <Image src={ReactLogo} alt="React" height="150px" objectFit="cover" />
                <Box p="6">
                  <Box textAlign="center" mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    React
                  </Box>
                </Box>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel>Kubs</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default HomePage
