import { IAsyncDataErrorAction, IAsyncDataLoadAction, IAsyncDataSuccessAction } from '../../models'
import { KubernetesProject } from '../../models/kubernetes/project'

export enum KubProjectTypes {
  ADD_NEW_PROJECT = '[kuberentes] Add New Project',
  ADD_NEW_PROJECT_EFFECT = '[kuberentes] Add New Project Effect',
  LOAD_PROJECTS = '[kuberentes] Load Projects',
  LOAD_PROJECTS_SUCCESS = '[kuberentes] Load Projects Success',
  LOAD_PROJECTS_ERROR = '[kuberentes] Load Projects Error',
  ADD_DEPLOYMENT = '[kuberentes] Add Deployment',
  ADD_SECRETS = '[kuberentes] Add Secrets',
  ADD_VOLUMES = '[kuberentes] Add Volumes',
  GENERATE_FILES = '[kuberentes] Generate Files',
}

export interface KubNewProjectAction {
  name: string
  type: KubProjectTypes.ADD_NEW_PROJECT
}

export interface KubNewProjectEffectAction {
  data: any
  type: KubProjectTypes.ADD_NEW_PROJECT_EFFECT
}

export interface KubLoadProjectAction extends IAsyncDataLoadAction {
  type: KubProjectTypes.LOAD_PROJECTS
}
export interface KubLoadProjectSuccessAction extends IAsyncDataSuccessAction<KubernetesProject[]> {
  type: KubProjectTypes.LOAD_PROJECTS_SUCCESS
}
export interface KubLoadProjectErrorAction extends IAsyncDataErrorAction {
  type: KubProjectTypes.LOAD_PROJECTS_ERROR
}

export interface KubGenerateFilesAction {
  data: any
  type: KubProjectTypes.GENERATE_FILES
}

export interface KubAddDeploymentAction {
  id: number
  data: any
  index?: number
  type: KubProjectTypes.ADD_DEPLOYMENT
}

export interface KubAddSecretAction {
  id: number
  data: any
  index?: number
  type: KubProjectTypes.ADD_SECRETS
}

export interface KubAddVolumeClaimsAction {
  id: number
  data: any
  index?: number
  type: KubProjectTypes.ADD_VOLUMES
}

export function kubAddProject(name: string): KubNewProjectAction {
  return {
    name,
    type: KubProjectTypes.ADD_NEW_PROJECT,
  }
}

export function kubAddProjectEffect(data: any): KubNewProjectEffectAction {
  return {
    data,
    type: KubProjectTypes.ADD_NEW_PROJECT_EFFECT,
  }
}

export function kubLoadProject(): KubLoadProjectAction {
  return {
    type: KubProjectTypes.LOAD_PROJECTS,
  }
}
export function kubLoadProjectSuccess(data: KubernetesProject[]): KubLoadProjectSuccessAction {
  return {
    type: KubProjectTypes.LOAD_PROJECTS_SUCCESS,
    data,
  }
}
export function kubLoadProjectError(error: string): KubLoadProjectErrorAction {
  return {
    type: KubProjectTypes.LOAD_PROJECTS_ERROR,
    error,
  }
}

export function kubAddDeployment(id: number, data: any, index?: number): KubAddDeploymentAction {
  return {
    id,
    data,
    index,
    type: KubProjectTypes.ADD_DEPLOYMENT,
  }
}

export function kubAddSecret(id: number, data: any, index?: number): KubAddSecretAction {
  return {
    id,
    data,
    index,
    type: KubProjectTypes.ADD_SECRETS,
  }
}

export function kubAddVolumeClaims(id: number, data: any, index?: number): KubAddVolumeClaimsAction {
  return {
    id,
    data,
    index,
    type: KubProjectTypes.ADD_VOLUMES,
  }
}

export function kubGenerateFiles(data: any): KubGenerateFilesAction {
  return {
    data,
    type: KubProjectTypes.GENERATE_FILES,
  }
}

export type KubProjectAction =
  | KubNewProjectAction
  | KubNewProjectEffectAction
  | KubLoadProjectAction
  | KubLoadProjectSuccessAction
  | KubLoadProjectErrorAction
  | KubAddDeploymentAction
  | KubGenerateFilesAction
  | KubAddSecretAction
  | KubAddVolumeClaimsAction
