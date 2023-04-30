import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.action";
import { EMPTY, catchError, exhaustMap, map, mergeMap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService) { }

        @Effect()
        login$ = this.actions$
          .pipe(
            ofType(loginStart),
            mergeMap((action) => 
                this.authService.login(action.email, action.password)
                .pipe(
                    map((data) => {  
                        const user=this.authService.toUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError(() => EMPTY)
              ))
            )
}