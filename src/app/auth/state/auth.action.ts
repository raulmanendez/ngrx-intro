import { createAction, props } from "@ngrx/store"
import { User } from "src/app/model/user.model";

export const LOGIN_START='[login] start'
export const LOGIN_SUCCESS='[login] success'
export const LOGIN_FAIL='[login] fail'

export const loginStart=createAction(LOGIN_START,
    props<{ email:string,password:string }>()
);
export const loginSuccess=createAction(LOGIN_SUCCESS,
    props< { user : User } >()
);

export const SIGNUP_START='[signup] start'
export const SIGNUP_SUCCESS='[signup] success'

export const signupStart=createAction(SIGNUP_START,
    props<{ email:string,password:string }>()
);
export const signupSuccess=createAction(SIGNUP_SUCCESS,
    props< { user : User } >()
);