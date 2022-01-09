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
  const { control, name, setFormValue } = props
  return (
    <FormControl display="flex" alignItems="center" margin={5}>
      <FormLabel htmlFor={name}>{control.label}</FormLabel>
      <Select id={name} defaultValue={control.default} onChange={e => setFormValue(name, e.target.value)}>
        {control.list.map(p => (
          <option key={p.value} value={p.value}>
            {p.display}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
