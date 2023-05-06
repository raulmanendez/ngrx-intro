import { Post } from "src/app/model/post.model"

export const initialState : PostState = {
    posts :[]
}

export interface PostState {
    posts : Post[]
}