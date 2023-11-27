import React from 'react'
import { Grid } from '@chakra-ui/react'
import DockerItem from './dockeritem'
import { dockerlistConfig } from '../../config/dockerlist.config'

interface IProps {
  gotoDockerPage: (app: string) => void
}

const DockerList = (props: IProps) => {
  const { gotoDockerPage } = props

  const allList = () => {
    const all = [...dockerlistConfig.frontEndApps, ...dockerlistConfig.backEndApps]
    return all.map(p => <DockerItem key={p.name} name={p.name} title={p.title} icon={p.icon} onClick={gotoDockerPage} />)
  }

  return (
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
      {allList()}
    </Grid>
  )
}

export default DockerList
