import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions"

export function postsReducer(state, action) {
    return _postsReducer(state, action)
}

const _postsReducer = createReducer(initialState,
    on(addPostSuccess, (state, action) => {
        let post = { ...action.post };
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePostSuccess, (state, action) => {
        const updatedPosts = state.posts.map(
            (post) => post.id == action.post.id ? action.post : post
        )
        return {
            ...state,
            posts: updatedPosts
        }
    }),
    on(deletePostSuccess, (state, action) => {
        const updatedPosts = state.posts.filter((post) => post.id != action.id)
        return {
            ...state,
            posts: updatedPosts
        }
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts,
        };
    })
);