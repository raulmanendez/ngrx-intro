import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostlistComponent } from './posts/postlist/postlist.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'counter', component : CounterComponent },
  { path: 'posts', component : PostlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
