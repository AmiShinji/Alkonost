import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FirstViewComponent} from './first-view/first-view.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {RegisterViewComponent} from './register-view/register-view.component';
import {AdditionalDataViewComponent} from './additional-data-view/additional-data-view.component';
import {MainPageViewComponent} from './main-page-view/main-page-view.component';
import {PaymentComponent} from './payment/payment.component';

const appRoutes: Routes = [
    {path: 'first-view', component: FirstViewComponent},
    {path: 'login', component: LoginViewComponent},
    {path: 'register', component: RegisterViewComponent},
    {path: 'additional', component: AdditionalDataViewComponent},
    {path: 'main', component: MainPageViewComponent},
    {path: 'payment', component: PaymentComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}