import { createReducer, on } from "@ngrx/store"
import { initialState, postAdapter } from "./posts.state"
import { addPostSuccess, deletePost, deletePostSuccess, loadPostsSuccess, updatePost, updatePostSuccess } from "./posts.actions"

export function postsReducer(state, action) {
    return _postsReducer(state, action)
}

const _postsReducer = createReducer(initialState,
    on(addPostSuccess, (state, action) => {
        return postAdapter.addOne(action.post,state);
    }),
    on(updatePostSuccess, (state, action) => {
        return postAdapter.updateOne(action.post,state);
    }),
    on(deletePostSuccess, (state, action) => {
        return postAdapter.removeOne(action.id,state);
    }),
    on(loadPostsSuccess, (state, action) => {
        return postAdapter.setAll(action.posts,state);
    })
);