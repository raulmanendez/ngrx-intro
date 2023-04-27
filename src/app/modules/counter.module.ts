import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CusomCounterInputComponent } from "../cusom-counter-input/cusom-counter-input.component";
import { CounterButtonsComponent } from "../counter/counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "../counter/counter-output/counter-output.component";
import { CounterComponent } from "../counter/counter/counter.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../state/counter.reducer";
import { COUNTER_STATE_NAME } from "../state/counter.selector";

const routes: Routes = [
    { path: '', component: CounterComponent }
]

@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CusomCounterInputComponent
    ],
    imports: [
        CommonModule, FormsModule, StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer), RouterModule.forChild(routes)
    ]
})
export class CounterModule {

}