import { createReducer } from "@ngrx/store"
import { initialState } from "./posts.state"

export function postsReducer(state,action) {
    return _postsReducer(state,action)
}

const _postsReducer = createReducer(initialState)