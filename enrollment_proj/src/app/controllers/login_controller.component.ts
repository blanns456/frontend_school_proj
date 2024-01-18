import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class LoginController {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;
  userdata: any;
  usertokenid: any;
  studentdata: any;
  // userinfo: any;
  // loadingdata = false;
  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }) {
    return this.http.post(this.Root_URL + 'login', user);
  }

  reloaddata() {
    this.token = localStorage.getItem('token') + 's***s';
    this.userdata = jwtDecode(this.token.substr(0, this.token.length - 5));
    const authenticate_id = btoa('authenticate_id');
    localStorage.setItem(authenticate_id, btoa(this.userdata.id_token));
  }

  getuserdetails() {
    this.studentdata = localStorage.getItem(btoa('authenticate_id'));
    var decodingtoken = atob(this.studentdata);
    var decodeddata = JSON.parse(decodingtoken);
    return decodeddata;
  }
}
