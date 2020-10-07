import { Post } from '../../models'

// Action Types

export enum PostsActionTypes {
  LOAD = '[PostPage] Load',
  SUCCESS = '[PostPage] Success',
  ERROR = '[PostPage] Error'
}

// Action Interface

export interface LoadPostsAction {
  type: PostsActionTypes.LOAD
}

export interface SuccessPostsAction {
  type: PostsActionTypes.SUCCESS
  payload: { posts: Post[] }
}

export interface ErrorPostsAction {
  type: PostsActionTypes.ERROR
  payload: { error: string }
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
    payload: {
      posts
    }
  }
}

export function errorPosts(error: string): ErrorPostsAction {
  return {
    type: PostsActionTypes.ERROR,
    payload: {
      error
    }
  }
}

export type PostsAction = LoadPostsAction | SuccessPostsAction | ErrorPostsAction
