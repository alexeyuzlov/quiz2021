import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionMasterComponent } from './question-master.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDirective } from './confirm.directive';
import { AnswersEditComponent } from './answers-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        QuestionEditComponent,
        QuestionMasterComponent,
        ConfirmDirective,
        AnswersEditComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
