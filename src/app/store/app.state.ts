import { AuthReducer } from "../auth/state/auth.reducer"
import { AUTH_STATE_NAME } from "../auth/state/auth.selector"
import { AuthState } from "../auth/state/auth.state"
import { SharedReducers } from "../shared/state/shared.reducers"
import { SHARED_STATE_NAME } from "../shared/state/shared.selector"
import { SharedState } from "../shared/state/shared.state"

export interface AppState {
    [SHARED_STATE_NAME]:SharedState,
    [AUTH_STATE_NAME]:AuthState

}

export const appReducer = {
    [SHARED_STATE_NAME]:SharedReducers,
    [AUTH_STATE_NAME]:AuthReducer
}