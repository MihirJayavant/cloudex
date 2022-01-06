import { Button, Flex, FormControl, FormLabel, Radio, RadioGroup, Select, Stack, Switch } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  generate: () => void
}

export const FormBuilder = (props: IProps) => {
  return (
    <Flex direction="column" maxWidth={800} minWidth={300}>
      <FormControl display="flex" alignItems="center" margin={5}>
        <FormLabel htmlFor="nodeVersion">Node Version</FormLabel>
        <Select id="nodeVersion" defaultValue={16}>
          <option value={16}>v16</option>
          <option value={14}>v14</option>
        </Select>
      </FormControl>
      <FormControl display="flex" alignItems="center" margin={5}>
        <RadioGroup defaultValue="npm">
          <Stack spacing={4} direction="row">
            <Radio value="npm">npm</Radio>
            <Radio value="yarn">yarn</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl display="flex" alignItems="center" margin={5}>
        <FormLabel htmlFor="ssr-docker-id" mb="0">
          Server side rendering enabled?
        </FormLabel>
        <Switch id="ssr-docker-id" />
      </FormControl>
      <FormControl margin={5}>
        <Button colorScheme="teal" size="md" onClick={props.generate}>
          Generate
        </Button>
      </FormControl>
    </Flex>
  )
}
