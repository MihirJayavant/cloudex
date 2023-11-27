import { Box, Image } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  title: string
  name: string
  icon: string
  onClick: (app: string) => void
}

const DockerItem = (props: IProps) => {
  return (
    <Box className="box" maxW="sm" borderWidth="1px" borderRadius="lg" maxWidth="220px" onClick={() => props.onClick(props.name)}>
      <Image fit="cover" src={props.icon} alt="Angular" height="125px" width="125px" margin={'5px'} />
      <Box margin={'5px'}>
        <Box textAlign="center" mt="1" fontWeight="bold" as="h4" lineHeight="tight" noOfLines={1}>
          {props.title}
        </Box>
      </Box>
    </Box>
  )
}

export default DockerItem
