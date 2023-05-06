import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { AppState } from "../store/app.state";
import { isAuthenticated } from "../auth/state/auth.selector";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MyAuthGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return this.store.select(isAuthenticated).pipe(map((authenticated) => {
            if (!authenticated)
                return this.router.createUrlTree(['auth'])
            return true
        })
        )
    }

}