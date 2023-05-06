import { createAction, props } from "@ngrx/store"
import { User } from "src/app/model/user.model";

export const LOGIN_START='[login] start'
export const LOGIN_SUCCESS='[login] success'
export const LOGIN_FAIL='[login] fail'

export const AUTO_LOGIN='[login] auto'
export const AUTO_LOGOUT='[logout] auto'


export const loginStart=createAction(LOGIN_START,
    props<{ email:string,password:string }>()
);
export const loginSuccess=createAction(LOGIN_SUCCESS,
    props< { user : User, redirect: boolean } >()
);

export const SIGNUP_START='[signup] start'
export const SIGNUP_SUCCESS='[signup] success'

export const signupStart=createAction(SIGNUP_START,
    props<{ email:string,password:string }>()
);
export const signupSuccess=createAction(SIGNUP_SUCCESS,
    props< { user : User, redirect: boolean } >()
);

export const autoLogin=createAction(AUTO_LOGIN);
export const autoLogout=createAction(AUTO_LOGOUT);