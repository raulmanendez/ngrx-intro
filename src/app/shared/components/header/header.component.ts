import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogout } from 'src/app/auth/state/auth.action';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AuthState } from 'src/app/auth/state/auth.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:Observable<boolean>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.loggedIn=this.store.select(isAuthenticated)
  }

  onLogout() {
    this.store.dispatch(autoLogout());
  }

}
