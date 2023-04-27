import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'counter', loadChildren: () => import('./modules/counter.module')
      .then(m => m.CounterModule)
  },
  {
    path: 'posts', loadChildren: () => import('./modules/posts.module')
      .then(m => m.PostModule)
  },
  {
    path:'auth', loadChildren : () => import('./auth/auth.module')
      .then(m => m.AUthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
