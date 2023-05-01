import { createAction, props } from "@ngrx/store"

export const SET_LOADER = '[shared] loader'
export const SET_ERROR = '[shared] error'

export const setLoader = createAction(SET_LOADER, props<{ status: boolean }>())

export const setError = createAction(SET_ERROR, props<{ message: string }>())