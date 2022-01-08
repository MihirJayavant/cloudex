import ReactLogo from '../assets/ReactLogo.png'
import AngularLogo from '../assets/AngularLogo.png'
import NodeLogo from '../assets/NodeLogo.png'
import JavaLogo from '../assets/JavaLogo.png'
import PhpLogo from '../assets/PhpLogo.png'

export const dockerlistConfig = {
  frontEndApps: [
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
  ],
  backEndApps: [
    {
      name: 'java',
      title: 'Java',
      icon: JavaLogo
    },
    {
      name: 'php',
      title: 'PHP',
      icon: PhpLogo
    },
    {
      name: 'node',
      title: 'Node',
      icon: NodeLogo
    },
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
