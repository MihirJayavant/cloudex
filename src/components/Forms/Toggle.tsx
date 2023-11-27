import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { ToggleControl } from '../../config/config'
import React from 'react'

export interface IProps {
  control: ToggleControl
  name: string
  controlState: any
  setFormValue: (name: string, value: boolean) => void
}

export function ToggleFormControl(props: IProps) {
  const { control, name, setFormValue } = props
  return (
    <FormControl display="flex" alignItems="center" margin={5}>
      <FormLabel htmlFor={name} mb="0">
        {control.label}
      </FormLabel>
      <Switch id={name} defaultChecked={control.default} onChange={e => setFormValue(name, e.target.checked)} />
    </FormControl>
  )
}
