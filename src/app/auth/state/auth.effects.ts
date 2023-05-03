import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";
import { EMPTY, catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { SharedState } from "src/app/shared/state/shared.state";
import { Store } from "@ngrx/store";
import { setError, setLoader } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {

    constructor(private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private sharedState: Store<SharedState>) { }

    login$ = createEffect(
        () => {
            return this.actions$
                .pipe(
                    ofType(loginStart),
                    mergeMap((action) =>
                        this.authService.login(action.email, action.password)
                            .pipe(
                                map((data) => {
                                    const user = this.authService.toUser(data);
                                    this.sharedState.dispatch(setLoader({ status: false }))
                                    return loginSuccess({ user });
                                }),
                                catchError((error) => {
                                    console.log(error.error.error.message)
                                    const message = this.authService.toMessage(
                                        error.error.error.message
                                    );
                                    this.sharedState.dispatch(setLoader({ status: false }))
                                    return of(setError({ message: message }))
                                })
                            ))
                )
        })

        signup$ = createEffect(
            () => {
                return this.actions$
                    .pipe(
                        ofType(signupStart),
                        mergeMap((action) =>
                            this.authService.signup(action.email, action.password)
                                .pipe(
                                    map((data) => {
                                        const user = this.authService.toUser(data);
                                        this.sharedState.dispatch(setLoader({ status: false }))
                                        return signupSuccess({ user });
                                    }),
                                    catchError((error) => {
                                        console.log(error.error.error.message)
                                        const message = this.authService.toMessage(
                                            error.error.error.message
                                        );
                                        this.sharedState.dispatch(setLoader({ status: false }))
                                        return of(setError({ message: message }))
                                    })
                                ))
                    )
            })

    loginRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(...[loginSuccess,signupSuccess]),
                tap((action) => {
                    this.router.navigate(['/']);
                })
            );
        },
        { dispatch: false }
    );
}