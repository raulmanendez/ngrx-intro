import { Component, OnInit } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { getChannelName } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cusom-counter-input',
  templateUrl: './cusom-counter-input.component.html',
  styleUrls: ['./cusom-counter-input.component.css']
})
export class CusomCounterInputComponent implements OnInit {

  value = 0;
  channelName$ :Observable<String>
  constructor(private store: Store< { counter :  CounterState  } >) {
    this.channelName$=this.store.select(getChannelName)
   }

  ngOnInit(): void {
    
  }

  onAdd(){
    this.store.dispatch(customIncrement({ counter : +this.value, channelName: "" }))
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName())
  }
}
