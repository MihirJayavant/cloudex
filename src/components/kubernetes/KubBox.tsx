import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  title: string
  onAdd?: (index?: number) => void
  items?: any[]
}

export function KubBox(props: IProps) {
  const itemList = () => {
    if (props.items) {
      return props.items.map((p, i) => (
        <Box
          key={p.metadataName ?? p.secretName}
          className="box"
          borderWidth="2px"
          borderRadius="lg"
          borderColor="skyblue"
          margin={10}
          onClick={() => (props.onAdd ? props.onAdd(i) : undefined)}
          width="100%"
        >
          <span>{p.metadataName ?? p.secretName}</span>
        </Box>
      ))
    }
  }
  return (
    <Box borderWidth="2px" borderRadius="lg" borderStyle="dashed" borderColor="#aaa">
      <Flex direction="column" alignItems="center">
        <Box bgColor="gray.100" width="fit-content" p={'5px'} m={2} borderRadius="md">
          <span>{props.title}</span>
        </Box>
        <Grid templateColumns={'repeat(6, 1fr)'} gap={6} style={{ height: 'max-content' }}>
          <Box
            className="box"
            borderWidth="2px"
            borderColor="blackAlpha.400"
            borderRadius="lg"
            margin={10}
            onClick={() => (props.onAdd ? props.onAdd() : undefined)}
          >
            <AddIcon w={6} h={6} margin={10} />
          </Box>
          {itemList()}
        </Grid>
      </Flex>
    </Box>
  )
}
