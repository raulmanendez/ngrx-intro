import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedState } from './shared/state/shared.state';
import { isLoading } from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ngrx';
  isLoading:Observable<boolean>;

  constructor(private store:Store<SharedState>) { }

  ngOnInit(): void {
    this.isLoading = this.store.select(isLoading)
  }


}
