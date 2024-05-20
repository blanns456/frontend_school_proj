import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'jquery';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class LoginController {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  token: any;
  userdata: any;
  data: any;
  studentdata: any;
  // userinfo: any;
  // loadingdata = false;
  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {}

  login(user: { username: string; password: string }) {
    return this.http.post(this.Root_URL + 'login', user);
  }

  // reloaddata() {
  //   this.token = localStorage.getItem('token') + 's***s';
  //   this.userdata = jwtDecode(this.token.substr(0, this.token.length - 5));
  //   const authenticate_id = btoa('authenticate_id');
  //   localStorage.setItem(authenticate_id, btoa(this.userdata.id_token));
  // }

  getuserdetails() {
    // const ids='';
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.Root_URL + 'showstudent', { headers: headers });
  }

  reloadstudentdatainfo() {
    this.getuserdetails();
    // return this.http.get(this.Root_URL + 'showstudentdetails/' + this.user_id);
  }

  studentAcad(user: { id: number }) {
    return this.http.post(this.Root_URL + 'studentAcad', user);
  }

  setdata(stringnewdata: any) {
    // console.log();
    const authenticate_id = btoa('authenticate_id');
    localStorage.setItem(
      authenticate_id,
      btoa(JSON.stringify([stringnewdata]))
    );
    this.getuserdetails();
    // console.log(this.getuserdetails());
  }

  forgotpass(sentmail: { email_address: string }) {
    return this.http.post(this.Root_URL + 'forgotpass', sentmail);
  }

  resetpass(data: { resetcode: string; password: string }) {
    return this.http.post(this.Root_URL + 'reset-password', data);
  }
}
