import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignupController {
  readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  token: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {}

  public createstaffaccounting(user: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    number: string;
    birth_date: string;
    username: string;
    password: string;
    confirm_password: string;
  }) {
    return this.http.post(this.Root_URL + 'adduser', user);
  }
}
