import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionMasterComponent } from './question-master.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionMasterComponent
  },
  {
    path: 'create',
    component: QuestionEditComponent
  },
  {
    path: 'edit/:id',
    component: QuestionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
