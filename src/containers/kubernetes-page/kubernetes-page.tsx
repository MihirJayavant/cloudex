import { Box, Grid, useDisclosure } from '@chakra-ui/react'
import * as React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Header } from '../../components/Header'
import { KubBox } from '../../components/kubernetes'
import { Deployment } from '../../components/kubernetes/deployment'
import { KubernetesProject } from '../../models/kubernetes'
import { getprojects, kubAddDeployment, KubAddDeploymentAction, State } from '../../store'

interface IProps {
  projects: KubernetesProject[]
  addDeployment: (id: number, data: any) => KubAddDeploymentAction
}

function kuberentesPage(props: IProps) {
  const deploymentModel = useDisclosure()
  const params = useParams()
  const project = props.projects.find(p => p.id === Number(params.id))!
  const deploymentSubmit = (data: any) => {
    props.addDeployment(Number(params.id), data)
    deploymentModel.onClose()
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
          <KubBox title="IP Clusters" items={project.deployment} onAdd={deploymentModel.onOpen} />
        </div>
        <div className="deployments">
          <KubBox title="Deploments" items={project.deployment} onAdd={deploymentModel.onOpen} />
        </div>
        <div className="secrets">
          <KubBox title="Secrets" />
        </div>
        <div className="volumes">
          <KubBox title="Volumes" />
        </div>
      </Grid>
      <Deployment onClose={deploymentModel.onClose} isOpen={deploymentModel.isOpen} onSubmit={deploymentSubmit} />
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  projects: getprojects(state),
})

const mapDispatchToProps = {
  addDeployment: kubAddDeployment,
}

const KuberentesPage = connect(mapStateToProps, mapDispatchToProps)(kuberentesPage)

export default KuberentesPage
