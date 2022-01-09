import { Box, Code } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  text: string[]
  fileType: string
}

const CodeFile = (props: IProps) => {
  const lines = (file: string[]) => {
    return (
      <div>
        {file.map(p => (
          <div key={p}>
            {p} {'\n'}
          </div>
        ))}
      </div>
    )
  }
  return (
    <Box mt={5} mb={5}>
      <Code p={5} w="100%" fontSize={18} className={props.fileType}>
        {lines(props.text)}
      </Code>
    </Box>
  )
}

export default CodeFile
