import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/model/post.model"


export const ADD_POST = '[add post] post'
export const UPDATE_POST_ACTION = '[update post] post'
export const DELETE_POST_ACTION = '[delete post] post'

export const addPost = createAction(ADD_POST, props<{post:Post}>())
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post:Post}>())
export const deletePost = createAction(DELETE_POST_ACTION, props<{id:number}>())