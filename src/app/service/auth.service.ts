import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../model/auth.response";
import { Observable } from "rxjs";
import { User } from "../model/user.model";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { autoLogout } from "../auth/state/auth.action";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval: any;
  constructor(private http: HttpClient,
    private store: Store<AppState>) { }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  signup(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  toUser(user: AuthResponse) {
    return new User(user.localId, user.email, user.idToken, new Date(new Date().getTime() + (+user.expiresIn * 1000)))
  }

  setUserInLocalStorage(user: User) {
    this.runTimeoutInterval(user);
    localStorage.setItem("auth_user", JSON.stringify(user));
  }

  getUserFromLocalStorage() {
    let userLocal = JSON.parse(localStorage.getItem("auth_user"));
    if (userLocal) {
      let user = new User(userLocal.id, userLocal.email, userLocal.token, userLocal.expiry)

      this.runTimeoutInterval(user);
      return user;
    }
    return null
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = new Date(user.expiryDate).getTime();
    const timeInterval = expirationDate - todaysDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
      //logout functionality or get the refresh token
    }, timeInterval);
  }

  logout() {
    localStorage.removeItem('auth_user');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }

  toMessage(code: string) {
    switch (code) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found!'
      case 'INVALID_PASSWORD':
        return 'Password Invalid!'
      case 'EMAIL_EXISTS':
        return 'Email already exists!'
      default:
        return 'Unknown Error!'
    }
  }
}