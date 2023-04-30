import { createAction, props } from "@ngrx/store"

export const SET_LOADER = '[shared] loader'

export const setLoader = createAction(SET_LOADER, props<{ status: boolean }>())