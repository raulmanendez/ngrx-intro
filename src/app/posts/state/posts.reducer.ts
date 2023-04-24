import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost } from "./posts.actions"

export function postsReducer(state,action) {
    return _postsReducer(state,action)
}

const _postsReducer = createReducer(initialState,
    on(addPost,(state,action) => {
        let post= {...action.post,id:state.posts.length };
        console.log(action)
        return {
            ...state,
            posts: [...state.posts, post ]
        }
    }))