import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Button,
  Input,
  Image,
  Grid,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { getProjects, kubAddProject, kubLoadProject, KubLoadProjectAction, KubNewProjectAction, State } from '../store'
import { connect } from 'react-redux'
import { KubernetesProject } from '../models/kubernetes/project'
import KubernetesLogo from '../assets/KubernetesLogo.png'
import { useNavigate } from 'react-router'

interface IProps {
  addProject: (name: string) => KubNewProjectAction
  projects: KubernetesProject[]
  loadProject: () => KubLoadProjectAction
}

export function kubernetesList(props: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = React.useState('')
  const navigate = useNavigate()

  const create = () => {
    props.addProject(name)
    onClose()
  }

  React.useEffect(() => {
    props.loadProject()
  }, [])

  function gotoKubsPage(id: number) {
    navigate(`/kubernetes/${id}`)
  }

  const list = () =>
    props.projects.map(p => (
      <Box className="box" maxW="sm" borderWidth="1px" borderRadius="lg" maxWidth="220px" key={p.id} onClick={() => gotoKubsPage(p.id)}>
        <Image fit="cover" src={KubernetesLogo} alt="Angular" height="125px" width="125px" margin={'5px'} />
        <Box margin={'5px'}>
          <Box textAlign="center" mt="1" fontWeight="bold" as="h4" lineHeight="tight" noOfLines={1}>
            {p.name}
          </Box>
        </Box>
      </Box>
    ))
  return (
    <div>
      <Grid
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(5, 1fr)',
          xl: 'repeat(6, 1fr)',
        }}
        gap={6}
        py={8}
        px={10}
        style={{ height: 'max-content' }}
      >
        <Box className="box" borderWidth="1px" borderRadius="lg" onClick={onOpen}>
          <AddIcon w={6} h={6} margin={20} key={-1} />
        </Box>
        {list()}
      </Grid>
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
  projects: getProjects(state),
})

const mapDispatchToProps = {
  addProject: kubAddProject,
  loadProject: kubLoadProject,
}

export const KubernetesList = connect(mapStateToProps, mapDispatchToProps)(kubernetesList)
