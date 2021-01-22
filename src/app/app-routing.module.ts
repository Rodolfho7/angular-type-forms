import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayFormComponent } from './array-form/array-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ParentComponent } from './parent/parent.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';

const routes: Routes = [
  {
    path: 'array-form',
    component: ArrayFormComponent
  },
  {
    path: 'basic-form',
    component: BasicFormComponent
  },
  {
    path: 'nested-form',
    component: NestedFormComponent
  },
  {
    path: 'submit-form',
    component: SubmitFormComponent
  },
  {
    path: 'valid-form',
    component: ValidFormComponent
  },
  {
    path: 'usuario',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
