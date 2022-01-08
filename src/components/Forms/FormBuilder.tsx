import { Button, Flex, FormControl, FormLabel, Select, Switch } from '@chakra-ui/react'
import * as React from 'react'
import { Control } from '../../config/config'
// import { RadioControl } from './Radio'

interface IProps {
  form: { [control: string]: Control }
  generate: () => void
}

export const FormBuilder = (props: IProps) => {
  const [formState, setForm] = React.useState<any>({})
  React.useEffect(() => {
    const newForm = { ...formState }
    for (const f in props.form) {
      const control = props.form[f]
      switch (control.type) {
        case 'select': {
          newForm[f] = control.list.find(p => p.isDefault)?.value
          break
        }
        case 'radio': {
          newForm[f] = control.list.find(p => p.isDefault)?.value
          break
        }
        case 'toggle': {
          newForm[f] = control.default
          break
        }
        default:
          break
      }
    }
    console.log(newForm)
    setForm(newForm)
  }, [])

  // const setFormValue = (name: string, value: any) => {
  //   const newForm = { ...formState }
  //   newForm[name] = value
  //   setForm(newForm)
  // }

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
