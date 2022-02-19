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

export function KubernetesList() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            <Input placeholder="Project Name" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
