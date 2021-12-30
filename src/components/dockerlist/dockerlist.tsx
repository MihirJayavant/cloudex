import * as React from 'react'
import ReactLogo from '../../assets/ReactLogo.png'
import AngularLogo from '../../assets/AngularLogo.png'
import { Grid } from '@chakra-ui/react'
import DockerItem from './dockeritem'

interface IProps {
  gotoDockerPage: (app: string) => void
}

const DockerList = (props: IProps) => {
  const { gotoDockerPage } = props
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
      <DockerItem name="angular" title="Angular" icon={AngularLogo} onClick={gotoDockerPage} />
      <DockerItem name="react" title="React" icon={ReactLogo} onClick={gotoDockerPage} />
    </Grid>
  )
}

export default DockerList
