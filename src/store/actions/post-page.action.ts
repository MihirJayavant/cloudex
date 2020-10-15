import { IAsyncDataErrorAction, IAsyncDataLoadAction, IAsyncDataSuccessAction, Post } from '../../models'

// Action Types

export enum PostsActionTypes {
  LOAD = '[PostPage] Load',
  SUCCESS = '[PostPage] Success',
  ERROR = '[PostPage] Error'
}

// Action Interface

export interface LoadPostsAction extends IAsyncDataLoadAction {
  type: PostsActionTypes.LOAD
}

export interface SuccessPostsAction extends IAsyncDataSuccessAction<Post[]> {
  type: PostsActionTypes.SUCCESS
}

export interface ErrorPostsAction extends IAsyncDataErrorAction {
  type: PostsActionTypes.ERROR
}

// Action Creators

export function loadPosts(): LoadPostsAction {
  return {
    type: PostsActionTypes.LOAD
  }
}

export function successPosts(posts: Post[]): SuccessPostsAction {
  return {
    type: PostsActionTypes.SUCCESS,
    data: posts
  }
}

export function errorPosts(error: string): ErrorPostsAction {
  return {
    type: PostsActionTypes.ERROR,
    error
  }
}

export type PostsAction = LoadPostsAction | SuccessPostsAction | ErrorPostsAction
