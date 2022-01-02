import ReactLogo from '../assets/ReactLogo.png'
import AngularLogo from '../assets/AngularLogo.png'

export const dockerlistConfig = {
  apps: [
    {
      name: 'angular',
      title: 'Angular',
      icon: AngularLogo
    },
    {
      name: 'react',
      title: 'React',
      icon: ReactLogo
    }
  ]
} as const

export const nodeVersions = [{
  display: 'v16',
  image: 'node:16-alpine',
  isDefault: true
}, {
  display: 'v14',
  image: 'node:14-alpine',
  isDefault: false
}] as const
