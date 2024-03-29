import { Box, Button, Grid, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Header } from '../components/Header'
import { KubBox, Secrets, VolumeClaims } from '../components/kubernetes'
import { Deployment } from '../components/kubernetes/deployment'
import { kubernetes, kubernetesEffect } from '../store'
import { KubernetesProject } from '../models/kubernetes'

function KuberentesPage() {
  const projects = useSelector(kubernetes.select)
  const dispatch = useDispatch()
  const deploymentModal = useDisclosure()
  const secretModal = useDisclosure()
  const volumeClaimsModal = useDisclosure()
  const params = useParams()
  const [deploymentIndex, setDeploymentIndex] = React.useState<number | undefined>()
  const [secretIndex, setSecretIndex] = React.useState<number | undefined>()
  const [volumeClaimsIndex, setVolumeClaimsIndex] = React.useState<number | undefined>()
  const project = projects.data.find(p => p.id === Number(params.id))

  React.useEffect(() => {
    if (!project) {
      dispatch<any>(kubernetesEffect.loadProjects())
    }
  }, [])

  const deploymentSubmit = (data: any) => {
    if (deploymentIndex !== undefined) {
      dispatch<any>(kubernetes.updateDeployment({ id: Number(params.id), deployment: data, index: deploymentIndex }))
    } else {
      dispatch<any>(kubernetes.addDeployment({ id: Number(params.id), deployment: data }))
    }
    deploymentModal.onClose()
  }

  const secretSubmit = (data: any) => {
    if (secretIndex !== undefined) {
      dispatch<any>(kubernetes.updateSecret({ id: Number(params.id), secret: data, index: secretIndex }))
    } else {
      dispatch<any>(kubernetes.addSecret({ id: Number(params.id), secret: data }))
    }
    secretModal.onClose()
  }

  const volumeClaimsSubmit = (data: any) => {
    if (volumeClaimsIndex !== undefined) {
      dispatch<any>(kubernetes.updateVolume({ id: Number(params.id), volume: data, index: volumeClaimsIndex }))
    } else {
      dispatch<any>(kubernetes.addVolume({ id: Number(params.id), volume: data }))
    }
    volumeClaimsModal.onClose()
  }

  const deploymentOpen = (index?: number) => {
    setDeploymentIndex(index)
    deploymentModal.onOpen()
  }

  const secretOpen = (index?: number) => {
    setSecretIndex(index)
    secretModal.onOpen()
  }

  const volumeClaimsOpen = (index?: number) => {
    setVolumeClaimsIndex(index)
    volumeClaimsModal.onOpen()
  }

  const generate = (project: KubernetesProject) => {
    dispatch<any>(kubernetesEffect.generateFiles(project))
  }

  if (!project) {
    return <div></div>
  }

  return (
    <div className="kubbox">
      <Header title="Kubernetes" subTitle="Manage yor containers" />
      <Grid templateColumns="repeat(4, 1fr)" gap={5} padding={10}>
        <div className="ingress">
          <Box bgColor="gray.200" p={5} borderRadius="md" textAlign={'center'} fontWeight="bold" fontSize={20}>
            Ingress
          </Box>
        </div>
        <div className="ip-clusters">
          <KubBox title="IP Clusters" items={project.deployment} onAdd={deploymentOpen} />
        </div>
        <div className="deployments">
          <KubBox title="Deployments" items={project.deployment} onAdd={deploymentOpen} />
        </div>
        <div className="secrets">
          <KubBox title="Secrets" items={project.secrets} onAdd={secretOpen} />
        </div>
        <div className="volumes">
          <KubBox title="Volumes" items={project.volumeClaims} onAdd={volumeClaimsOpen} />
        </div>
      </Grid>
      <Deployment
        data={project.deployment[deploymentIndex ?? -1]}
        onClose={deploymentModal.onClose}
        isOpen={deploymentModal.isOpen}
        onSubmit={deploymentSubmit}
      />
      <Secrets data={project.secrets[secretIndex ?? -1]} isOpen={secretModal.isOpen} onClose={secretModal.onClose} onSubmit={secretSubmit} />
      <VolumeClaims
        data={project.volumeClaims[secretIndex ?? -1]}
        isOpen={volumeClaimsModal.isOpen}
        onClose={volumeClaimsModal.onClose}
        onSubmit={volumeClaimsSubmit}
      />
      <Button colorScheme="blue" onClick={() => generate(project)} mb={5} ml={5}>
        Generate Files
      </Button>
    </div>
  )
}

export function Component() {
  return <KuberentesPage />
}

Component.displayName = 'KuberentesPage'
