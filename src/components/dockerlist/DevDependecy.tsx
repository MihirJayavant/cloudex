import { Box, Checkbox, Flex, Image } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  url: string
  title: string
  field: string
  isChecked: boolean
  onChange: (field: string, isChecked: boolean) => void
}

export function DevDependency(props: IProps) {
  return (
    <Box className="box" maxW="sm" borderWidth="1px" borderRadius="lg" p={5}>
      <Checkbox onChange={e => props.onChange(props.field, e.target.checked)}>
        <Flex>
          <Image fit="cover" src={props.url} alt={props.title} height="30px" width="30px" margin={'5px'} />
          <Box margin={'5px'}>
            <Box textAlign="center" mt="1" fontWeight="bold" as="h4" lineHeight="tight" noOfLines={1}>
              {props.title}
            </Box>
          </Box>
        </Flex>
      </Checkbox>
    </Box>
  )
}
