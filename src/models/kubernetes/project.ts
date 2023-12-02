export interface IDeployment {
  metadataName: string
  replicas: number
  componentLabel: string
  containerName: string
  containerImage: string
  containerPort: number
}

export interface ISecret {
  envName: string
  secretName: string
  secretKey: string
}

export interface IVolumeClaim {
  metadataName: string
  accessMode: 'ReadWriteOnce' | 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOncePod'
  storageAmount: number
}

export interface KubernetesProject {
  id: number
  name: string
  deployment: IDeployment[]
  secrets: ISecret[]
  volumeClaims: IVolumeClaim[]
  ingress: {
    redirects: { path: string; serviceName: ''; servicePort: number }[]
  }
}

export interface KubernetesProjectMini {
  id: number
  name: string
}
