import { Component, OnInit } from '@angular/core';
import { Customer } from "app/models/customer";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Customer;
  constructor() { }

  ngOnInit() {
    this.model = new Customer();
  }

}
