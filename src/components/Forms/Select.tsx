import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { SelectControl } from '../../config/config'
import * as React from 'react'

export interface IProps {
  control: SelectControl
  name: string
  controlState: any
  setFormValue: (name: string, value: string) => void
}

export function SelectFormControl(props: IProps) {
  const { control, controlState } = props
  return (
    <FormControl display="flex" alignItems="center" margin={5}>
      <FormLabel htmlFor="nodeVersion">{control.label}</FormLabel>
      <Select id="nodeVersion" defaultValue={controlState}>
        {control.list.map(p => (
          <option key={p.value} value={p.value}>
            {p.display}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
