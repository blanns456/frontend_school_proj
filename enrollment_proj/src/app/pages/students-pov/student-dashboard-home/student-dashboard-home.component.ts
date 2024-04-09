import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';

@Component({
  selector: 'app-student-dashboard-home',
  templateUrl: './student-dashboard-home.component.html',
  styleUrls: ['./student-dashboard-home.component.css'],
})
export class StudentDashboardHomeComponent implements OnInit {
  studentdata: any;
  loaddetails = false;

  constructor(private logincontroller: LoginController) { }

  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();
  }
}
