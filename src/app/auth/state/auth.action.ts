import { createAction, props } from "@ngrx/store"

export const LOGIN_START='[login] start'
export const LOGIN_SUCCESS='[login] success'
export const LOGIN_FAIL='[login] fail'

export const loginStart=createAction(LOGIN_START,props<{email,password}>());
export const loginSuccess=createAction(LOGIN_SUCCESS)