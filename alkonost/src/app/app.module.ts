import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstViewComponent} from './first-view/first-view.component';
import {RegistrationViewComponent} from './registration-view/registration-view.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
      FirstViewComponent,
      RegistrationViewComponent

  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
