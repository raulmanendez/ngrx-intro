import { Post } from "src/app/model/post.model"

export const initialState : PostState = {
    posts :[ 
        { "id":"0", "title":"Title 1", "description":"demo description 1"},
        { "id":"1", "title":"Title 2", "description":"demo description 2"},
    ]
}

export interface PostState {
    posts : Post[]
}