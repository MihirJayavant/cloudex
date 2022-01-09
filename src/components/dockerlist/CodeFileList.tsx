import { Flex } from '@chakra-ui/react'
import * as React from 'react'
import { IFile } from '../../core/files'
import CodeFile from './CodeFile'

interface IProps {
  files: IFile[]
}

const CodeFileList = (props: IProps) => {
  const files = (file: IFile[]) => {
    return file.map(p => <CodeFile key={p.fileType} text={p.text} fileType={p.fileType} />)
  }

  return <Flex direction="column">{files(props.files)}</Flex>
}

export default CodeFileList
