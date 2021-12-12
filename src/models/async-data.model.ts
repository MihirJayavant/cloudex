
export enum AsyncDataStateType {
  INITIAL = 'Initial',
  LOADED = 'Loaded',
  LOADING = 'Loading',
  ERROR = 'Error'
}

export interface IAsyncData<T> {
  data: T
  dataState: AsyncDataStateType
  error: string
}

export interface Action {
  readonly type: string;
}

export function getInitialState<T>(data: T): IAsyncData<T> {
  return {
    data,
    dataState: AsyncDataStateType.INITIAL,
    error: ''
  }
}

export interface IAsyncDataLoadAction extends Action {
  readonly type: string
}

export interface IAsyncDataSuccessAction<T> extends Action {
  data: T
}
export interface IAsyncDataErrorAction extends Action {
  error: string
}

export type AsyncDataAction<T> =
  | IAsyncDataLoadAction
  | IAsyncDataSuccessAction<T>
  | IAsyncDataErrorAction

type baseReducerFn<TData, TState extends IAsyncData<TData>> = (
  state: TState | undefined,
  action: any
) => TState

export interface IAsyncDataActionType {
  loadActionType: string
  successActionType: string
  errorActionType: string
}

function updateObj<T,U>(state: T, value: U): T & U {
  return { ...state, ...value }
}

export function withReducer<TData, TState extends IAsyncData<TData>>(
  baseReducer: baseReducerFn<TData, TState>,
  actionType: IAsyncDataActionType
) {
  return (state: TState, action: AsyncDataAction<TData>) => {
    switch (action.type) {
      case actionType.loadActionType:
        state = updateObj(state, {
          dataState: AsyncDataStateType.LOADING,
          error: ''
        })
        break
      case actionType.successActionType:
        state = updateObj(state, {
          data: (action as IAsyncDataSuccessAction<TData>).data,
          dataState: AsyncDataStateType.LOADED,
          error: ''
        })
        break
      case actionType.errorActionType:
        state = updateObj(state, {
          dataState: AsyncDataStateType.ERROR,
          error: (action as IAsyncDataErrorAction).error
        })
    }
    return baseReducer(state, action)
  }
}
