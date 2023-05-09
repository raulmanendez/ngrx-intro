import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity"
import { Post } from "src/app/model/post.model"

export interface PostState extends EntityState<Post> { }

export const postAdapter = createEntityAdapter<Post>()

export const initialState  =  postAdapter.getInitialState();