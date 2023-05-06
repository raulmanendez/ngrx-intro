import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, exhaustMap, map, take } from "rxjs";
import { AppState } from "../store/app.state";
import { getToken } from "../auth/state/auth.selector";


@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(getToken).pipe(
            take(1),
            exhaustMap((token) => {
              if (!token) {
                return next.handle(req);
              }
              let modifiedReq = req.clone({
                params: req.params.append('auth', token),
              });
              return next.handle(modifiedReq);
            })
          );
    }
}