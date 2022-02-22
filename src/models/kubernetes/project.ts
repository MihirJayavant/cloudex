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
  ingress: {
    redirects: { path: string, serviceName: '', servicePort: number }[]
  }
}

export interface KubernetesProjectMini {
  id: number
  name: string
}
