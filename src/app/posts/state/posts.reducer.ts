import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost, deletePost, updatePost } from "./posts.actions"

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
    }),
    on(updatePost, (state,action) => {
        const updatedPosts = state.posts.map(
            (post) => post.id==action.post.id ? action.post : post
        )
        return {
            ...state,
            posts: updatedPosts
        }
    }),
    on(deletePost, (state,action) => {
        const updatedPosts=state.posts.filter((post) => post.id!=action.id)
        return {
            ...state,
            posts:updatedPosts
        }
    })
    
    )