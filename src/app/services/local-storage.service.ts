import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Customer } from '../models/customer';

@Injectable()
export class LocalStorageService {

    public setLoggedInUser(customer: Customer) {
        try {
            localStorage.setItem('loggedInUser',JSON.stringify(customer));
        } catch(err) {
            console.log(err);
        }
    }

    public getLoggedInUser(): Customer {
        return this.getUser();
    }

    public removeLoggedInUser() {
        localStorage.removeItem('loggedInUser');
    }

    public getAccessToken() : string {
        return this.getUser().token;
    }

    public isUserStored(): boolean {
        if (this.getUser()) {
            return true;
        } else {
            return false;
        }
    }
    
    public getRequestHeader() {
        const temp = this.getUser();
        if (temp) {
            return new Headers({'access-token': temp.token,'customer_id':temp._id});
        } else {
            return null;
        }
    }

    private getUser(): Customer {
        return JSON.parse(localStorage.getItem('loggedInUser')) || null;
    }
}