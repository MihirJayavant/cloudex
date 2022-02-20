export interface Ingress {
  apiVersion: string
  kind: string
  metadata: Metadata
  spec: Spec
}

export interface Metadata {
  name: string
  annotations: Annotations
}

export interface Annotations {
  'nginx.ingress.kubernetes.io/rewrite-target': string
}

export interface Spec {
  ingressClassName: string
  rules: Rule[]
}

export interface Rule {
  http: HTTP
}

export interface HTTP {
  paths: Path[]
}

export interface Path {
  path: string
  pathType: string
  backend: Backend
}

export interface Backend {
  service: Service
}

export interface Service {
  name: string
  port: Port
}

export interface Port {
  number: number
}
