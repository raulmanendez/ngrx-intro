import { User } from "src/app/model/user.model"

export interface AuthState { 
    user : User
}

export const initialState : AuthState = {
    user :null
}