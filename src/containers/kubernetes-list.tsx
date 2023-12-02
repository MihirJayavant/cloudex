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
import { kubernetes, kubernetesEffect } from '../store'
import KubernetesLogo from '../assets/KubernetesLogo.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

export function KubernetesList() {
  const projects = useSelector(kubernetes.select)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = React.useState('')
  const navigate = useNavigate()

  const create = () => {
    dispatch<any>(kubernetesEffect.addNewProject(name))
    onClose()
  }

  React.useEffect(() => {
    dispatch<any>(kubernetesEffect.loadProjects())
  }, [])

  function gotoKubsPage(id: number) {
    navigate(`/kubernetes/${id}`)
  }

  const list = () =>
    projects.data.map(p => (
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
