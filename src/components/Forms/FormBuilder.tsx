import { Button, Flex, FormControl } from '@chakra-ui/react'
import React from 'react'
import { Control } from '../../config/config'
import { devDependecyConfig } from '../../config/dockerlist.config'
import { DevDependency } from '../dockerlist/DevDependecy'
import { RadioFormControl } from './Radio'
import { SelectFormControl } from './Select'
import { ToggleFormControl } from './Toggle'

interface IProps {
  form: { [control: string]: Control }
  generate: (state: any) => void
  clear: () => void
}

export const FormBuilder = (props: IProps) => {
  const [formState, setForm] = React.useState<any>({})
  React.useEffect(() => {
    const newForm = { ...formState }
    for (const f in props.form) {
      const control = props.form[f]
      switch (control.type) {
        case 'select': {
          newForm[f] = control.default
          break
        }
        case 'radio': {
          newForm[f] = control.default
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
    devDependecyConfig.forEach(p => (newForm[p.field] = false))
    setForm(newForm)
  }, [])

  const setFormValue = (name: string, value: any) => {
    const newForm = { ...formState }
    newForm[name] = value
    setForm(newForm)
  }

  const renderControl = (control: Control, name: string) => {
    switch (control.type) {
      case 'select': {
        return <SelectFormControl controlState={formState[name]} control={control} name={name} setFormValue={setFormValue} />
      }
      case 'radio': {
        return <RadioFormControl controlState={formState[name]} control={control} name={name} setFormValue={setFormValue} />
      }
      case 'toggle': {
        return <ToggleFormControl controlState={formState[name]} control={control} name={name} setFormValue={setFormValue} />
      }
      default:
        break
    }
  }

  const onDevChange = (field: string, isChecked: boolean) => {
    const newForm = { ...formState }
    newForm[field] = isChecked
    setForm(newForm)
  }
  return (
    <Flex direction="column" maxWidth={800} minWidth={300}>
      {Object.keys(props.form).map(k => (
        <div key={k}>{renderControl(props.form[k], k)}</div>
      ))}

      <Flex p={5} justifyContent="space-evenly" wrap="wrap">
        {devDependecyConfig.map(p => (
          <DevDependency title={p.title} url={p.url} key={p.title} field={p.field} onChange={onDevChange} isChecked={formState[p.field]} />
        ))}
      </Flex>
      <FormControl margin={5}>
        <Button colorScheme="teal" size="md" onClick={() => props.generate(formState)}>
          Generate
        </Button>
        <Button colorScheme="blue" size="md" ml={5} onClick={() => props.clear()}>
          Clear
        </Button>
      </FormControl>
    </Flex>
  )
}
