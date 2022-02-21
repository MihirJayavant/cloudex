import { AddIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  title: string
  onAdd?: () => void
}

export function KubBox(props: IProps) {
  return (
    <Box borderWidth="2px" borderRadius="lg" borderStyle="dashed">
      <Flex direction="column" alignItems="center">
        <Box bgColor="gray.100" width="fit-content" p={'5px'} m={2} borderRadius="md">
          <span>{props.title}</span>
        </Box>
        <Grid templateColumns={'repeat(6, 1fr)'} gap={6} style={{ height: 'max-content' }}>
          <Box className="box" borderWidth="1px" borderRadius="lg" margin={10} onClick={props.onAdd}>
            <AddIcon w={6} h={6} margin={10} />
          </Box>
        </Grid>
      </Flex>
    </Box>
  )
}
