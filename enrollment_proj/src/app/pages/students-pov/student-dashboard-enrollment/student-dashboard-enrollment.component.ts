import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import * as $ from 'jquery'; // kini sa pgdeclare nis $
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-dashboard-enrollment',
  templateUrl: './student-dashboard-enrollment.component.html',
  styleUrls: ['./student-dashboard-enrollment.component.css'],
})
export class StudentDashboardEnrollmentComponent implements OnInit {
  data: any;
  enrollments: any;
  studentdata: any;
  studname: string | undefined;

  constructor(
    private http: HttpClient,
    private loginenrollment: LoginController
  ) {}

  ngOnInit(): void {
    this.studentdata = this.loginenrollment.getuserdetails();
    this.studname = this.studentdata[0]['id'];

    this.http
      .get(this.loginenrollment.Root_URL + 'my_enrollment/' + this.studname)
      .subscribe((res) => {
        this.data = res;
        this.enrollments = this.data[0];
        console.log(this.enrollments[0]['units']);
      });
  }
}
