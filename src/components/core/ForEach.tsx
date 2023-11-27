import { ReactNode } from 'react'

interface IProps<T> {
  list: T[]
  children: (item: T) => ReactNode
}

export function ForEach<T>(props: IProps<T>) {
  return props.list.map(item => props.children(item))
}
