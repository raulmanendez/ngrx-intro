import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../model/auth.response";
import { Observable } from "rxjs";
import { User } from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(email: string, password: string) : Observable<AuthResponse> {
        return this.http.post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
          { email, password, returnSecureToken: true }
        );
      }

      toUser(user :AuthResponse) {
        return new User(user.localId,user.email,user.idToken, new Date(new Date().getTime() +  (+user.expiresIn * 1000)))
      }
}