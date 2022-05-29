import {
  Button,
  Input,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Divider,
  Select,
} from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  isOpen: boolean
  data?: any
  onClose: () => void
  onSubmit: (data: any) => void
}

export function VolumeClaims(props: IProps) {
  const { isOpen, onClose } = props
  const [state, setState] = React.useState({
    metadataName: '',
    accessMode: 'ReadWriteOnce',
    storageAmount: 1,
  })

  React.useEffect(() => {
    const { data } = props
    if (!data) {
      setState({
        metadataName: '',
        accessMode: 'ReadWriteOnce',
        storageAmount: 1,
      })
      return
    }
    setState({
      metadataName: data.metadataName,
      accessMode: data.accessMode,
      storageAmount: data.storageAmount,
    })
  }, [props.data])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Secrets</ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <FormLabel>Metadata Name</FormLabel>
          <Input mb={2} placeholder="Metadata Name" value={state.metadataName} onChange={e => setState({ ...state, metadataName: e.target.value })} />

          <FormLabel>Access Mode</FormLabel>
          <Select mb={2} placeholder="Access Mode" value={state.accessMode} onChange={e => setState({ ...state, accessMode: e.target.value })}>
            <option value="ReadWriteOnce">ReadWriteOnce</option>
            <option value="ReadOnlyMany">ReadOnlyMany</option>
            <option value="ReadWriteMany">ReadWriteMany</option>
            <option value="ReadWriteOncePod">ReadWriteOncePod</option>
          </Select>

          <FormLabel>Storage Amount</FormLabel>
          <Input
            type="number"
            mb={2}
            placeholder="Storage Amount"
            value={state.storageAmount}
            onChange={e => setState({ ...state, storageAmount: Number(e.target.value) })}
          />
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button colorScheme="blue" onClick={() => props.onSubmit(state)}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
