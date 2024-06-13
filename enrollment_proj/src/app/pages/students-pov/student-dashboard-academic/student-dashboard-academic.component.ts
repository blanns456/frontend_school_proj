import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';

@Component({
  selector: 'app-student-dashboard-academic',
  templateUrl: './student-dashboard-academic.component.html',
  styleUrls: ['./student-dashboard-academic.component.css'],
})
export class StudentDashboardAcademicComponent implements OnInit {
  studentdata: any;
  constructor(private logincontroller: LoginController) {}
  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();
  }
}
