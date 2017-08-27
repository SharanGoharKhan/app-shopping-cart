import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdDatepickerModule, MdNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        MdNativeDateModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        MdDatepickerModule
    ],
    exports: [
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        MdNativeDateModule,
        MdDatepickerModule
    ],
    declarations: [

    ],
    providers: [
    ]
})
export class SharedModule{}