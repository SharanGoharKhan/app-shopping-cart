import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from '../services/authetication.service';
import { SnackbarService } from '../services/snackbarservice';
import { LocalStorageService } from '../services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  declarations: [AuthenticationComponent, LoginComponent, SignupComponent]
})
export class AuthenticationModule { }
