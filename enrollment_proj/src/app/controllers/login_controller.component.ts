import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginController {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;
  userdata: any;
  usertokenid: any;
  studentdata: any;
  user: any;
  constructor(private http: HttpClient) { }

  login(user: { email: string; password: string }) {
    return this.http.post(this.Root_URL + 'login', user);
  }

  getuserdetails() {
    this.token = localStorage.getItem('token');
    console.log(this.token);

    this.http.get(this.Root_URL + 'showstudent').subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: (error: any) => {
        console.error('Error fetching user details:', error);
      }
    });
  }

  reloadstudentdatainfo() {
    // var info = this.getuserdetails();
    return this.http.get(this.Root_URL + 'showstudentdetails/');
  }

  studentAcad(user: { id: number }) {
    return this.http.post(this.Root_URL + 'studentAcad', user);
  }

  // setdata(stringnewdata: any) {
  //   // console.log();
  //   const authenticate_id = btoa('authenticate_id');
  //   localStorage.setItem(
  //     authenticate_id,
  //     btoa(JSON.stringify([stringnewdata]))
  //   );
  //   this.getuserdetails();
  //   // console.log(this.getuserdetails());
  // }
}
