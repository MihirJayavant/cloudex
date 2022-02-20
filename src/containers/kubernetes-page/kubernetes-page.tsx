import { AddIcon } from '@chakra-ui/icons'
import { Box, Grid } from '@chakra-ui/react'
import * as React from 'react'
// import { useParams } from 'react-router'
import { Header } from '../../components/Header'

function KuberentesPage() {
  // const params = useParams()
  return (
    <div>
      <Header />
      <Grid templateColumns="1fr" gap={10} padding={10}>
        <Box borderWidth="2px" borderRadius="lg" borderStyle="dashed">
          <Grid
            templateColumns={{
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)',
              xl: 'repeat(6, 1fr)',
            }}
            gap={6}
            py={10}
            px={10}
            style={{ height: 'max-content' }}
          >
            <Box className="box" borderWidth="1px" borderRadius="lg">
              <AddIcon w={6} h={6} margin={20} key={-1} />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default KuberentesPage
