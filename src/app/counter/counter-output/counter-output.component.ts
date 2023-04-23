import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  @Input() counter=0

  counterStore$: Observable<Number>
  constructor(private store: Store<{ counter : { counter :number } }>) {
    this.counterStore$=this.store.select(getCounter);
  }

  ngOnInit(): void {
    
  }

  
}
