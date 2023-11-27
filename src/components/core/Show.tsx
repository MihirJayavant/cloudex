import { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren {
  when: boolean
}

export function Show(props: IProps) {
  return props.when ? props.children : undefined
}
