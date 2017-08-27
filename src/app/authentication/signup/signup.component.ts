import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { AuthenticationService } from '../../services/authetication.service';
import { SnackbarService } from '../../services/snackbarservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loading = false;
  genders;
  model: Customer;
  constructor(
    private authenticationService: AuthenticationService,
    private snackbarService: SnackbarService) { }

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
  createAccount() {
    console.log(this.model);
    this.loading = true;
    this.authenticationService.signup(this.model)
    .then(response => {
      this.loading = false;
      console.log(">>>>>>>>>>>>>");
      console.log("response from server");
      console.log(response);
      console.log(">>>>>>>>>>>>>>");
      this.snackbarService.showSuccess("Created Account",null);
    })
    .catch(error => {
      this.loading = false;
      this.snackbarService.showError("Failed to create account","Error");
    })
  }

}
