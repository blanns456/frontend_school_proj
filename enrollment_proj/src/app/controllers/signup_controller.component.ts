import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignupController {
  // readonly Root_URL = 'http://127.0.0.1:8000/api/';
  // readonly Root_URL = 'http://127.0.0.1:8000/api/';
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
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
  }) {
    return this.http.post(this.Root_URL + 'staff-signup', user);
  }

  public createstaffregistrar(user: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    number: string;
    birth_date: string;
    username: string;
    password: string;
  }) {
    return this.http.post(this.Root_URL + 'staff-signup', user);
  }

  public createstaffdean(user: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    number: string;
    birth_date: string;
    username: string;
    password: string;
  }) {
    return this.http.post(this.Root_URL + 'registrar-signup', user);
  }

  public createstaffteacher(user: {
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    number: string;
    birth_date: string;
    username: string;
    password: string;
  }) {
    return this.http.post(this.Root_URL + 'registrar-signup', user);
  }
}
