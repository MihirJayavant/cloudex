import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

interface IProps {
  title: string
  subTitle: string
}

export function Header(props: IProps) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" h="30%" py={8} px={10} backgroundColor="blue.400">
      <Link to="/home">
        <Heading mb={4} color="white">
          {props.title}
        </Heading>
      </Link>
      <Text fontSize="xl" color="white">
        {props.subTitle}
      </Text>
    </Box>
  )
}
