import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/model/post.model"


export const ADD_POST = '[add post] post'

export const addPost = createAction(ADD_POST, props<{post:Post}>())