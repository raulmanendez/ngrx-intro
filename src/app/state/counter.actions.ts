import { createAction, props } from '@ngrx/store'
import { CounterState } from './counter.state';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement= createAction('customIncrement',props< CounterState >())

export const changeChannelName= createAction("changeChannelName")