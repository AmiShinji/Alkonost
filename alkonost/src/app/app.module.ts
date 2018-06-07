import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FirstViewComponent} from './first-view/first-view.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule, MatDividerModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule,
    MatProgressBarModule,
    MatRadioModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {RegisterViewComponent} from './register-view/register-view.component';
import {AdditionalDataViewComponent} from './additional-data-view/additional-data-view.component';
import {MainPageViewComponent} from './main-page-view/main-page-view.component';
import {RootScopeService} from './root-scope.service';
import {PaymentComponent} from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
      FirstViewComponent,
      LoginViewComponent,
      RegisterViewComponent,
      AdditionalDataViewComponent,
      MainPageViewComponent,
      PaymentComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatButtonModule,
      MatProgressBarModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatRadioModule,
      MatDatepickerModule,
      MatAutocompleteModule,
      MatNativeDateModule,
      MatOptionModule,
      MatIconModule,
      MatTabsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatListModule,
      MatDividerModule
  ],
  providers: [RootScopeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
