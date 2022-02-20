import { IAsyncDataErrorAction, IAsyncDataLoadAction, IAsyncDataSuccessAction } from '../../models'
import { KubernetesProject } from '../../models/kubernetes/project'

export enum KubProjectTypes {
  ADD_NEW_PROJECT = '[kuberentes] Add New Project',
  LOAD_PROJECTS = '[kuberentes] Load Projects',
  LOAD_PROJECTS_SUCCESS = '[kuberentes] Load Projects Success',
  LOAD_PROJECTS_ERROR = '[kuberentes] Load Projects Error',
}

export interface KubNewProjectAction {
  name: string
  type: KubProjectTypes.ADD_NEW_PROJECT
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

export function kubAddProject(name: string): KubNewProjectAction {
  return {
    name,
    type: KubProjectTypes.ADD_NEW_PROJECT,
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

export type KubProjectAction = KubNewProjectAction | KubLoadProjectAction | KubLoadProjectSuccessAction | KubLoadProjectErrorAction
