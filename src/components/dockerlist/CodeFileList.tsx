import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { IFile } from '../../core/files'
import CodeFile from './CodeFile'

declare const hljs: any

interface IProps {
  files: IFile[]
}

const CodeFileList = (props: IProps) => {
  const files = (file: { text: string[]; fileType: string }[]) => {
    return file.map((p, i) => <CodeFile key={i} text={p.text} fileType={p.fileType} />)
  }

  React.useEffect(() => hljs.highlightAll(), [props.files])

  return <Flex direction="column">{files(props.files)}</Flex>
}

export default CodeFileList
