import { Box, Grid } from '@chakra-ui/react'
import * as React from 'react'
// import { useParams } from 'react-router'
import { Header } from '../../components/Header'
import { KubBox } from '../../components/kubernetes'

function KuberentesPage() {
  // const params = useParams()
  return (
    <div className="kubbox">
      <Header />
      <Grid templateColumns="repeat(4, 1fr)" gap={5} padding={10}>
        <div className="ingress">
          <Box bgColor="gray.200" p={5} borderRadius="md" textAlign={'center'} fontWeight="bold" fontSize={20}>
            Ingress
          </Box>
        </div>
        <div className="ip-clusters">
          <KubBox title="IP Clusters" />
        </div>
        <div className="deployments">
          <KubBox title="Deploments" />
        </div>
        <div className="secrets">
          <KubBox title="Secrets" />
        </div>
        <div className="volumes">
          <KubBox title="Volumes" />
        </div>
      </Grid>
    </div>
  )
}

export default KuberentesPage
