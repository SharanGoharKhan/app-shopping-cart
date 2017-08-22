import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AuthenticationRoutingModule
  ],
  providers: [
  ],
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent]
})
export class AuthenticationModule { }
