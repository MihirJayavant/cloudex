import { IAsyncDataErrorAction, IAsyncDataLoadAction, IAsyncDataSuccessAction } from '../../models'
import { KubernetesProject } from '../../models/kubernetes/project'

export enum KubProjectTypes {
  ADD_NEW_PROJECT = '[kuberentes] Add New Project',
  ADD_NEW_PROJECT_EFFECT = '[kuberentes] Add New Project Effect',
  LOAD_PROJECTS = '[kuberentes] Load Projects',
  LOAD_PROJECTS_SUCCESS = '[kuberentes] Load Projects Success',
  LOAD_PROJECTS_ERROR = '[kuberentes] Load Projects Error',
  ADD_DEPLOYMENT = '[kuberentes] Add Deployment'
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

export interface KubAddDeploymentAction {
  id: number
  data: any
  type: KubProjectTypes.ADD_DEPLOYMENT
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

export function kubAddDeployment(id: number, data: any): KubAddDeploymentAction {
  return {
    id,
    data,
    type: KubProjectTypes.ADD_DEPLOYMENT,
  }
}

export type KubProjectAction = KubNewProjectAction | KubNewProjectEffectAction | KubLoadProjectAction | KubLoadProjectSuccessAction | KubLoadProjectErrorAction | KubAddDeploymentAction
