import { SharedReducers } from "../shared/state/shared.reducers"
import { SHARED_STATE_NAME } from "../shared/state/shared.selector"
import { SharedState } from "../shared/state/shared.state"

export interface AppState {
    [SHARED_STATE_NAME]:SharedState
}

export const appReducer = {
    [SHARED_STATE_NAME]:SharedReducers
}