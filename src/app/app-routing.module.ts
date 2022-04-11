import { ParentComponent } from './parent/parent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lifecycle',
    component: LifecycleComponent,
  },
  {
    path:'component',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
