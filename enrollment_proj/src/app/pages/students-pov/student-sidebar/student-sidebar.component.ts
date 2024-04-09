import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css'],
})
export class StudentSidebarComponent implements OnInit {
  userdata: any;
  loaddetails = false;
  studentdata: any;
  studentAcads: any;
  student: any;
  Acads: any;
  data: any;
  studname: string | undefined;

  constructor(
    private logincontroller: LoginController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.studentdata = this.logincontroller.getuserdetails();
    // this.studentAcads = this.logincontroller.studentAcad(
    //   this.studentdata[0]['id']
    // );

    this.studentAcads = this.studentdata[0]['id'];

    this.http
      .get(this.logincontroller.Root_URL + 'studentAcad/' + this.studentAcads)
      .subscribe((res) => {
        this.data = res;
        this.Acads = this.data[0];
        // console.log(this.Acads);
      });

    this.studname =
      this.studentdata[0]['lastname'] + ', ' + this.studentdata[0]['firstname'];
  }
}
