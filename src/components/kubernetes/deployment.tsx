import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import * as React from 'react'

interface IProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export function Deployment(props: IProps) {
  const { isOpen, onClose } = props
  const [state, setState] = React.useState({
    metadataName: '',
    replicas: 1,
    componentLabel: '',
    containerName: '',
    containerImage: '',
    containerPort: 80,
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deployment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Metadata Name" value={state.metadataName} onChange={e => setState({ ...state, metadataName: e.target.value })} />
          <Input
            type="number"
            placeholder="Replicas"
            value={state.replicas}
            onChange={e => setState({ ...state, replicas: Number(e.target.value) })}
          />
          <Input placeholder="Component Label" value={state.componentLabel} onChange={e => setState({ ...state, componentLabel: e.target.value })} />
          <Input placeholder="Container Name" value={state.containerName} onChange={e => setState({ ...state, containerName: e.target.value })} />
          <Input placeholder="Container Image" value={state.containerImage} onChange={e => setState({ ...state, containerImage: e.target.value })} />
          <Input
            type="number"
            placeholder="Container Port"
            value={state.containerPort}
            onChange={e => setState({ ...state, containerPort: Number(e.target.value) })}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={() => props.onSubmit(state)}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
