import { Box, Button, Grid, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Header } from '../../components/Header'
import { KubBox, Secrets } from '../../components/kubernetes'
import { Deployment } from '../../components/kubernetes/deployment'
import { KubernetesProject } from '../../models/kubernetes'
import {
  getProjects,
  kubAddDeployment,
  KubAddDeploymentAction,
  kubAddSecret,
  KubAddSecretAction,
  kubGenerateFiles,
  KubGenerateFilesAction,
  kubLoadProject,
  KubLoadProjectAction,
  State,
} from '../../store'

interface IProps {
  projects: KubernetesProject[]
  addDeployment: (id: number, data: any, index?: number) => KubAddDeploymentAction
  loadProject: () => KubLoadProjectAction
  addSecret: (id: number, data: any, index?: number | undefined) => KubAddSecretAction
  generate: (data: any) => KubGenerateFilesAction
}

function kuberentesPage(props: IProps) {
  const deploymentModel = useDisclosure()
  const secretModel = useDisclosure()
  const params = useParams()
  const [deploymentIndex, setDeploymentIndex] = React.useState<number | number>()
  const [secretIndex, setSecretIndex] = React.useState<number | number>()
  const project = props.projects.find(p => p.id === Number(params.id))

  React.useEffect(() => {
    if (!project) {
      props.loadProject()
    }
  }, [])

  const deploymentSubmit = (data: any) => {
    props.addDeployment(Number(params.id), data, deploymentIndex)
    deploymentModel.onClose()
  }

  const secretSubmit = (data: any) => {
    props.addSecret(Number(params.id), data, deploymentIndex)
    secretModel.onClose()
  }

  const deploymentOpen = (index?: number) => {
    setDeploymentIndex(index)
    deploymentModel.onOpen()
  }

  const secretOpen = (index?: number) => {
    setSecretIndex(index)
    secretModel.onOpen()
  }

  if (!project) {
    return <div></div>
  }

  return (
    <div className="kubbox">
      <Header />
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
          <KubBox title="Volumes" />
        </div>
      </Grid>
      <Deployment
        data={project.deployment[deploymentIndex ?? -1]}
        onClose={deploymentModel.onClose}
        isOpen={deploymentModel.isOpen}
        onSubmit={deploymentSubmit}
      />
      <Secrets data={project.secrets[secretIndex ?? -1]} isOpen={secretModel.isOpen} onClose={secretModel.onClose} onSubmit={secretSubmit} />
      <Button colorScheme="blue" onClick={() => props.generate(project)} mb={5} ml={5}>
        Generate Files
      </Button>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  projects: getProjects(state),
})

const mapDispatchToProps = {
  addDeployment: kubAddDeployment,
  addSecret: kubAddSecret,
  loadProject: kubLoadProject,
  generate: kubGenerateFiles,
}

const KuberentesPage = connect(mapStateToProps, mapDispatchToProps)(kuberentesPage)

export default KuberentesPage
