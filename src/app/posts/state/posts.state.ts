import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity"
import { Post } from "src/app/model/post.model"


export function comparator(a:Post,b:Post) {
    return a.title.localeCompare(b.title);
}

export interface PostState extends EntityState<Post> { 
    count : number
}

export const postAdapter = createEntityAdapter<Post>({
    sortComparer:comparator
})

export const initialState  =  postAdapter.getInitialState({
    count:0
});