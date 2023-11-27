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
} from '@chakra-ui/react'
import React from 'react'

interface IProps {
  isOpen: boolean
  data?: any
  onClose: () => void
  onSubmit: (data: any) => void
}

export function Secrets(props: IProps) {
  const { isOpen, onClose } = props
  const [state, setState] = React.useState({
    envName: '',
    secretName: '',
    secretKey: '',
  })

  React.useEffect(() => {
    const { data } = props
    if (!data) {
      setState({
        envName: '',
        secretName: '',
        secretKey: '',
      })
      return
    }
    setState({
      envName: data.envName,
      secretName: data.secretName,
      secretKey: data.secretKey,
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
          <FormLabel>Environment Name</FormLabel>
          <Input mb={2} placeholder="Environment Name" value={state.envName} onChange={e => setState({ ...state, envName: e.target.value })} />

          <FormLabel>Secret Name</FormLabel>
          <Input mb={2} placeholder="Secret Name" value={state.secretName} onChange={e => setState({ ...state, secretName: e.target.value })} />

          <FormLabel>Secret Key</FormLabel>
          <Input mb={2} placeholder="Secret Key" value={state.secretKey} onChange={e => setState({ ...state, secretKey: e.target.value })} />
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
