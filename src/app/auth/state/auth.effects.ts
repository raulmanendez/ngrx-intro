import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { autoLogin, autoLogout, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";
import { EMPTY, catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { SharedState } from "src/app/shared/state/shared.state";
import { Store } from "@ngrx/store";
import { setError, setLoader } from "src/app/shared/state/shared.actions";
import { Router } from "@angular/router";
import { User } from "src/app/model/user.model";

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
                                    this.authService.setUserInLocalStorage(user);

                                    this.sharedState.dispatch(setLoader({ status: false }))
                                    return loginSuccess({ user, redirect:true });
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
                                        this.authService.setUserInLocalStorage(user);

                                        this.sharedState.dispatch(setLoader({ status: false }))
                                        return signupSuccess({ user, redirect:false });
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
                tap((data) => {
                    if(data.redirect)
                        this.router.navigate(['/']);
                })
            );
        },
        { dispatch: false }
    );

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(autoLogin),
          mergeMap((action) => {
            const user = this.authService.getUserFromLocalStorage();
            return of(loginSuccess({ user, redirect: false }));
          })
        );
      });

   logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['auth']);
        })
      );
    },
    { dispatch: false }
  );
}