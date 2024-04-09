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
  constructor(private http: HttpClient) { }

  login(user: { email: string; password: string }) {
    // var token = localStorage.getItem('token');
    //  localStorage.getItem('token');
    // let config = {
    //   withCredentials: true, // Include credentials (cookies) in the request
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       '4ntZyLuq5eBJEVvyNeKHRpp2efk4hXxEl6jx15DWoGDdBQBacGjpCBW8y4apxWXa', // Include your JWT token if needed
    //   },
    // };
    return this.http.post(this.Root_URL + 'login', user);
  }

  reloaddata() {
    this.token = localStorage.getItem('token') + 's***s';
    this.userdata = jwtDecode(this.token.substr(0, this.token.length - 5));
    const authenticate_id = btoa('authenticate_id');
    localStorage.setItem(authenticate_id, btoa(this.userdata.id_token));
  }

  getuserdetails() {
    this.studentdata = localStorage.getItem(this.token);

    return this.studentdata;
  }

  reloadstudentdatainfo() {
    var info = this.getuserdetails();
    return this.http.get(this.Root_URL + 'showstudentdetails/' + info[0].id);
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
