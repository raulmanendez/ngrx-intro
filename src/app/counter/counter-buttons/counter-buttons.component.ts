import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{ counter : { counter :number } }>) { }

  ngOnInit(): void {
  }

  // onIncrement() {
  //   this.increment.emit()
  // }

  // onDecrement() {
  //   this.decrement.emit()
  // }

  // onReset() {
  //   this.reset.emit()
  // }

   onIncrement() {
      this.store.dispatch(increment())
    }
  
    onDecrement() {
      this.store.dispatch(decrement())
    }
  
    onReset() {
      this.store.dispatch(reset())
    }

}
