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
