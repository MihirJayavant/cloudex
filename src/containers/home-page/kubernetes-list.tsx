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
  Image,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { getprojects, kubAddProject, KubNewProjectAction, State } from '../../store'
import { connect } from 'react-redux'
import { KubernetesProject } from '../../models/kubernetes/project'
import KubernetesLogo from '../../assets/KubernetesLogo.png'

interface IProps {
  addProject: (name: string) => KubNewProjectAction
  projects: KubernetesProject[]
}

export function kubernetesList(props: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = React.useState('')
  const create = () => {
    props.addProject(name)
    onClose()
  }
  const list = () =>
    props.projects.map(p => (
      <Box className="box" maxW="sm" borderWidth="1px" borderRadius="lg" maxWidth="220px" key={p.id}>
        <Image fit="cover" src={KubernetesLogo} alt="Angular" height="125px" width="125px" margin={'5px'} />
        <Box margin={'5px'}>
          <Box textAlign="center" mt="1" fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
            {p.name}
          </Box>
        </Box>
      </Box>
    ))
  return (
    <div>
      <Flex>
        <Box className="box" borderWidth="1px" borderRadius="lg" onClick={onOpen}>
          <AddIcon w={6} h={6} margin={20} key={-1} />
          {list()}
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

const mapStateToProps = (state: State) => ({
  projects: getprojects(state),
})

const mapDispatchToProps = {
  addProject: kubAddProject,
}

export const KubernetesList = connect(mapStateToProps, mapDispatchToProps)(kubernetesList)
