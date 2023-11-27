import { Wrap, Input, WrapItem, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

interface IProps {
  onAdd: (value: string) => void
}

export function todoCaption(props: IProps) {
  const [text, setText] = useState('')
  console.log('heyyy')
  const onAdd = () => {
    props.onAdd(text)
    setText('')
  }
  return (
    <Wrap spacing={4}>
      <WrapItem>
        <Input placeholder="Enter Todo" onChange={e => setText(e.target.value)} value={text} />
      </WrapItem>
      <WrapItem>
        <Button colorScheme="orange" onClick={onAdd}>
          Add
        </Button>
      </WrapItem>
    </Wrap>
  )
}

export const TodoCaption = React.memo(todoCaption)
