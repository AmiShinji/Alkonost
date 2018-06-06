import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FirstViewComponent} from './first-view/first-view.component';
import {RegistrationViewComponent} from './registration-view/registration-view.component';

const appRoutes: Routes = [
    {path: 'first-view', component: FirstViewComponent},
    {path: 'register', component: RegistrationViewComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
        // other imports here
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}