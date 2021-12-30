import { Box, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Header = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" h="30%" py={8} px={10} backgroundColor="blue.400">
      <Heading mb={4}>Cloudex</Heading>
      <Text fontSize="xl">Containerized your Application</Text>
    </Box>
  )
}
