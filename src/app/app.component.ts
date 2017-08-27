import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-header></app-header><ng-snotify></ng-snotify><router-outlet></router-outlet><app-footer></app-footer>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
