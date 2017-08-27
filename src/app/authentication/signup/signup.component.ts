import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders;
  model: Customer;
  constructor() { }

  ngOnInit() {
    this.model = new Customer();
    this.genders = [
      {
        value: 0,
        name: 'Male'
      },
      {
        value: 1,
        name: 'Female'
      }
    ]
  }

}
