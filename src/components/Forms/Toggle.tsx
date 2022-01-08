import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { ToggleControl } from '../../config/config'
import * as React from 'react'

export interface IProps {
  control: ToggleControl
  name: string
  controlState: any
  setFormValue: (name: string, value: string) => void
}

export function ToggleFormControl(props: IProps) {
  const { control } = props
  return (
    <FormControl display="flex" alignItems="center" margin={5}>
      <FormLabel htmlFor="ssr-docker-id" mb="0">
        {control.label}
      </FormLabel>
      <Switch id="ssr-docker-id" defaultChecked={control.default} />
    </FormControl>
  )
}
