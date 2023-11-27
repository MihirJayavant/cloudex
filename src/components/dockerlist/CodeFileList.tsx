import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IFile } from '../../core/files'
import CodeFile from './CodeFile'

interface IProps {
  files: IFile[]
}

const CodeFileList = (props: IProps) => {
  const files = (file: IFile[]) => {
    return file.map((p, i) => (
      <Stack spacing={3} key={p.title} m={5}>
        <Text fontSize="2xl" as="b">
          {' '}
          {i + 1}. {p.title}
        </Text>
        <CodeFile key={p.fileType} text={p.text} fileType={p.fileType} />
      </Stack>
    ))
  }

  return <Flex direction="column">{files(props.files)}</Flex>
}

export default CodeFileList
