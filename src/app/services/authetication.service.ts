import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Customer } from '../models/customer';
import { LocalStorageService } from './local-storage.service';
import { CONSTANTS } from '../shared/constants';

@Injectable()
export class AuthenticationService {
    
    authenticated = false;
    constructor(
        private http:Http,
        private localStorageService: LocalStorageService
    ){}

    headers = new Headers({
        'Content-type': 'application/json'
    });
    signup(customer: Customer): Promise<Customer> {
        return this.http.post(CONSTANTS.serverUrl+ '/user/signup', JSON.stringify(customer),{headers: this.headers})
        .toPromise()
        .then(res => {
            console.log(res);
            const temp =res.json().data;
            temp.token = res.json().token;
            this.setAuthenticated(true);
            this.localStorageService.setLoggedInUser(temp);
            return temp;
        })
        .catch(this.handleError);
    }

    setAuthenticated (status:boolean) {
        this.authenticated = true;
    }

    handleError(error) {
        return Promise.reject(error.json().error);
    }
}