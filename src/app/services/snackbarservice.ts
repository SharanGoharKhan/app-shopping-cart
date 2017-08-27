import { Injectable } from '@angular/core';
import { SnotifyService, SnotifyConfig, SnotifyPosition } from 'ng-snotify';
import { MdSnackBar } from '@angular/material';
@Injectable()
export class SnackbarService {
    constructor(private snackbar: MdSnackBar,private snotify: SnotifyService) {
        snotify.setConfig({
            timeout: 5000,
            showProgressBar: false
        }, {
            position: SnotifyPosition.right_top
        });
    }
    showSuccess(message,action) {
        this.snotify.success('Success',message);
    }
    showError(title,message) {
        this.snotify.error(title,message);
    }
}