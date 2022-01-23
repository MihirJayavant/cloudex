import ReactLogo from '../assets/ReactLogo.png'
import AngularLogo from '../assets/AngularLogo.png'
import NodeLogo from '../assets/NodeLogo.png'
import DotnetLogo from '../assets/DotnetLogo.png'
import NextLogo from '../assets/NextLogo.png'
import { angularConfig } from './angular.config'
import { reactConfig } from './react.config'
import { nextjsConfig } from './nextjs.config'
import { nodeConfig } from './node.config'
import { aspConfig } from './dotnet.config'

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
      option: reactConfig,
    },
    {
      name: 'nextjs',
      title: 'Next Js',
      icon: NextLogo,
      option: nextjsConfig,
    },
  ],
  backEndApps: [
    {
      name: 'aspdotnet',
      title: 'ASP Dotnet',
      icon: DotnetLogo,
      option: aspConfig,
    },
    {
      name: 'node',
      title: 'Node',
      icon: NodeLogo,
      option: nodeConfig,
    },
  ],
} as const
