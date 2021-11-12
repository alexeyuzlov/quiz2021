import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionMasterComponent } from './question-master.component';
import { QuestionEditResolver } from './question-edit-resolver.service';

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
        component: QuestionEditComponent,
        resolve: {
            question: QuestionEditResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
