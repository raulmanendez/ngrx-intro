import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setLoader } from "./shared.actions";

const _sharedReducer= createReducer(initialState,
    on(setLoader, (state,action) => {
        return {
            ...state,
            isLoading:action.status
        }
    })
    )


export function SharedReducers(state,action) {
    return _sharedReducer(state,action);
}