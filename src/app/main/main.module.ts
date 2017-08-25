import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MainRoutingModule
  ],
  providers: [
  ],
  declarations: [MainComponent]
})
export class MainModule { }