import { IBuilder } from '../core/docker'

export type Control = SelectControl | RadioControl | ToggleControl

export interface SelectControl {
  readonly label: string
  readonly type: 'select'
  readonly list: {
    readonly display: string
    readonly value: string
  }[]
  readonly default: string
}

export interface RadioControl {
  readonly label: string
  readonly type: 'radio'
  readonly list: {
    readonly display: string
    readonly value: string
  }[]
  readonly default: string
}

export interface ToggleControl {
  readonly label: string
  readonly type: 'toggle'
  readonly default: boolean
}

export interface DockerAppConfig {
  readonly form: { [control: string]: Control }
  readonly builder: {
    readonly fileName: string
    readonly build: (state: any) => IBuilder
    readonly filetype: string
  }[]
}

export const nodeVersions = [
  {
    display: 'v16',
    value: 'node:16-alpine',
  },
  {
    display: 'v14',
    value: 'node:14-alpine',
  },
]
