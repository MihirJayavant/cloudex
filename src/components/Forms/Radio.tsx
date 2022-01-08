import { FormControl, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { RadioControl } from '../../config/config'
import * as React from 'react'

export interface IProps {
  control: RadioControl
  name: string
  controlState: any
  setFormValue: (name: string, value: string) => void
}

export function RadioFormControl(props: IProps) {
  const { control, controlState, setFormValue, name } = props
  return (
    <FormControl display="flex" alignItems="center" margin={5}>
      <RadioGroup defaultValue={controlState} onChange={v => setFormValue(name, v)}>
        <Stack spacing={4} direction="row">
          {control.list.map(p => (
            <Radio key={p.value} value={p.value}>
              {p.display}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}
