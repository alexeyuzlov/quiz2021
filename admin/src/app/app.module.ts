import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionMasterComponent } from './question-master.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionEditComponent,
    QuestionMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
