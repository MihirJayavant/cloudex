import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

export const Header = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" h="30%" py={8} px={10} backgroundColor="blue.400">
      <Link to="/home">
        <Heading mb={4} color="white">
          Cloudex
        </Heading>
      </Link>
      <Text fontSize="xl" color="white">
        Containerized your Application
      </Text>
    </Box>
  )
}
