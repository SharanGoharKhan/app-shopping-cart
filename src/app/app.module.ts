import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from './main/main.module';
import { AuthenticationService } from './services/authetication.service';
import { SnackbarService } from './services/snackbarservice';
import { SnotifyService, SnotifyModule } from 'ng-snotify';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MainModule,
    FlexLayoutModule,
    MaterialModule,
    SnotifyModule
  ],
  providers: [AuthenticationService, SnackbarService, LocalStorageService,SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
