import ReactLogo from '../assets/ReactLogo.png'
import AngularLogo from '../assets/AngularLogo.png'
import NodeLogo from '../assets/NodeLogo.png'
import JavaLogo from '../assets/JavaLogo.png'
import PhpLogo from '../assets/PhpLogo.png'
import { angularConfig } from './angular.config'

export const dockerlistConfig = {
  frontEndApps: [
    {
      name: 'angular',
      title: 'Angular',
      icon: AngularLogo,
      option: angularConfig,
    },
    {
      name: 'react',
      title: 'React',
      icon: ReactLogo,
      option: angularConfig,
    },
  ],
  backEndApps: [
    {
      name: 'java',
      title: 'Java',
      icon: JavaLogo,
      option: angularConfig,
    },
    {
      name: 'php',
      title: 'PHP',
      icon: PhpLogo,
      option: angularConfig,
    },
    {
      name: 'node',
      title: 'Node',
      icon: NodeLogo,
      option: angularConfig,
    },
  ],
} as const
