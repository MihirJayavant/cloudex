import * as React from 'react'
import { Grid } from '@chakra-ui/react'
import DockerItem from './dockeritem'
import { dockerlistConfig } from '../../config/dockerlist.config'

interface IProps {
  gotoDockerPage: (app: string) => void
}

const DockerList = (props: IProps) => {
  const { gotoDockerPage } = props

  const list = () => dockerlistConfig.apps.map(p => <DockerItem key={p.name} name={p.name} title={p.title} icon={p.icon} onClick={gotoDockerPage} />)

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        lg: 'repeat(5, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={6}
      py={8}
      px={10}
    >
      {list()}
    </Grid>
  )
}

export default DockerList
