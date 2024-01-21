import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css'],
})
export class StudentSidebarComponent implements OnInit {
  userdata: any;
  loaddetails = false;
  studentdata: any;
  studname: string | undefined;
  constructor(private logincontroller: LoginController) {}

  ngOnInit() {
    // this.studentdata = localStorage.getItem(btoa('authenticate_id'));
    // this.studentdata = atob(this.studentdata);
    this.studentdata = this.logincontroller.getuserdetails();
    this.studname =
      this.studentdata[0]['lastname'] + ', ' + this.studentdata[0]['firstname'];
  }
}
