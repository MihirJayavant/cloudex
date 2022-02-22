export interface KubernetesProject {
  id: number
  name: string
  deployment: {
    metadataName: string,
    replicas: number,
    componentLabel: string,
    containerName: string,
    containerImage: string,
    containerPort: number,
  }[],
  secrets: {
    envName: string,
    secretName: string,
    secretKey: string,
  }[]
  ingress: {
    redirects: { path: string, serviceName: '', servicePort: number }[]
  }
}

export interface KubernetesProjectMini {
  id: number
  name: string
}
