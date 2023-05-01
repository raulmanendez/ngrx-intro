import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setError, setLoader } from "./shared.actions";
import { errorMessage } from "./shared.selector";

const _sharedReducer= createReducer(initialState,
    on(setLoader, (state,action) => {
        return {
            ...state,
            isLoading:action.status,
            errorMessage:''
        }
    }),
    on(setError, (state,action) => {
        return  {
            ...state,
            errorMessage:action.message
        }
    })
)


export function SharedReducers(state,action) {
    return _sharedReducer(state,action);
}