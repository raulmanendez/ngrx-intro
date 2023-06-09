import { Update } from "@ngrx/entity"
import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/model/post.model"


export const ADD_POST = '[add post] post'
export const ADD_POST_SUCCESS = '[add post] post success'

export const UPDATE_POST_ACTION = '[update post] post'
export const UPDATE_POST_SUCCESS = '[update post success] post'

export const DELETE_POST_ACTION = '[delete post] post'
export const DELETE_POST_SUCCESS = '[delete post success] post'

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';

export const addPost = createAction(ADD_POST, props<{post:Post}>())
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{post:Post}>())

export const updatePost = createAction(UPDATE_POST_ACTION, props<{post:Post}>())
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS, props<{post:Update<Post>}>())

export const deletePost = createAction(DELETE_POST_ACTION, props<{id:string}>())
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS, props<{id:string}>())


export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>()
);