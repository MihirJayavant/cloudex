import { Box, Image } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  title: string
  name: string
  icon: string
  onClick: (app: string) => void
}

const DockerItem = (props: IProps) => {
  return (
    <Box className="box" maxW="sm" borderWidth="1px" borderRadius="lg" onClick={() => props.onClick(props.name)}>
      <Image src={props.icon} alt="Angular" height="150px" objectFit="cover" />
      <Box p="6">
        <Box textAlign="center" mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {props.title}
        </Box>
      </Box>
    </Box>
  )
}

export default DockerItem
