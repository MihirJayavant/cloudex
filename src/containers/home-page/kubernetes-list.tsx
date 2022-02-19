import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { kubProjectAddProject, KubProjectAddProjectAction } from '../../store'
import { connect } from 'react-redux'

interface IProps {
  addProject: (name: string) => KubProjectAddProjectAction
}

export function kubernetesList(props: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = React.useState('')
  const create = () => {
    props.addProject(name)
    onClose()
  }
  return (
    <div>
      <Flex>
        <Box className="box" borderWidth="1px" borderRadius="lg" onClick={onOpen}>
          <AddIcon w={6} h={6} margin={20} />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Kubernetes Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Project Name" value={name} onChange={e => setName(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={() => create()}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

// const mapStateToProps = (state: State) => ({
//   kubs: getTodos(state),
// })

const mapDispatchToProps = {
  addProject: kubProjectAddProject,
}

export const KubernetesList = connect(undefined, mapDispatchToProps)(kubernetesList)
