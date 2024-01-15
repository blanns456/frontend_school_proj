import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class LoginController {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;
  userdata: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }) {
    return this.http.post(this.Root_URL + 'login', user);
  }

  reloaddata() {
    this.token = localStorage.getItem('token');
    this.userdata = jwtDecode(this.token);
    console.log(this.userdata);
  }
}
