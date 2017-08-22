import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
    {path:'',redirectTo:'/main', pathMatch:'full'},
    {path:'main',component:MainComponent},
    {path: 'auth',loadChildren:'./authentication/authentication.module#AuthenticationModule'}
];
@NgModule(
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule {
}