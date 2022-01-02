import { Box } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  text: string[]
  fileType: string
}

const CodeFile = (props: IProps) => {
  const lines = (file: string[]) => {
    return file.map((p, i) => (
      <div key={i}>
        {p} {'\n'}
      </div>
    ))
  }
  return (
    <Box mt={5} mb={5}>
      <pre>
        <code className={props.fileType}>{lines(props.text)}</code>
      </pre>
    </Box>
  )
}

export default CodeFile
