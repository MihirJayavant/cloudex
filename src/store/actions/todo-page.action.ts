import { Todo } from '../../models'

//Action Types

export enum TodoActionTypes {
  ADD = '[TodoPage] Add',
  DELETE = '[TodoPage] Delete'
}

//Action Interface

export interface AddTodoAction {
  type: TodoActionTypes.ADD
  payload: { todo: Todo }
}

export interface DeleteTodoAction {
  type: TodoActionTypes.DELETE
  payload: { index: number }
}

//Action Creators

export function addTodo(value: string): AddTodoAction {
  return {
    type: TodoActionTypes.ADD,
    payload: {
      todo: {
        id: Math.random() * 1000,
        value: value
      }
    }
  }
}

export function deleteTodo(index: number): DeleteTodoAction {
  return {
    type: TodoActionTypes.DELETE,
    payload: {
      index: index
    }
  }
}

export type TodoAction = AddTodoAction | DeleteTodoAction
