export enum KubProjectTypes {
  ADD_NEW_Project = '[kuberentes] Add New Project',
}

export interface KubProjectAddProjectAction {
  name: string
  type: KubProjectTypes.ADD_NEW_Project
}

export function kubProjectAddProject(name: string): KubProjectAddProjectAction {
  return {
    name,
    type: KubProjectTypes.ADD_NEW_Project,
  }
}

export type KubProjectAction = KubProjectAddProjectAction
