import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.action";
import { EMPTY, catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { SharedState } from "src/app/shared/state/shared.state";
import { Store } from "@ngrx/store";
import { setError, setLoader } from "src/app/shared/state/shared.actions";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {

    constructor(private actions$: Actions,
         private authService: AuthService,
         private sharedState:Store<SharedState>) { }

        @Effect()
        login$ = this.actions$
          .pipe(
            ofType(loginStart),
            mergeMap((action) => 
                this.authService.login(action.email, action.password)
                .pipe(
                    map((data) => {  
                        const user=this.authService.toUser(data);
                        this.sharedState.dispatch(setLoader({status:false}))
                        return loginSuccess({ user });
                    }),
                    catchError((error) => {
                        console.log(error.error.error.message)
                        const message=this.authService.toMessage(
                            error.error.error.message
                        );
                        this.sharedState.dispatch(setLoader({status:false}))
                        return of(setError({ message:message }))
                    })
              ))
            )
}