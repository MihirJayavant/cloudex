import { Box } from '@chakra-ui/react'
import React from 'react'

declare const hljs: any
interface IProps {
  text: string[]
  fileType: string
}

const CodeFile = (props: IProps) => {
  const codeRef = React.useRef<HTMLPreElement>(null)

  React.useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [props.text])

  return (
    <Box mt={5} mb={5}>
      <pre>
        <code className={props.fileType} ref={codeRef} style={{ width: '700px' }}>
          <div>{props.text.join('\n')}</div>
        </code>
      </pre>
    </Box>
  )
}

export default CodeFile
