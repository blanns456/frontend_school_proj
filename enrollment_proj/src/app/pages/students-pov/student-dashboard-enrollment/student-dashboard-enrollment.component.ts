import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';

@Component({
  selector: 'app-student-dashboard-enrollment',
  templateUrl: './student-dashboard-enrollment.component.html',
  styleUrls: ['./student-dashboard-enrollment.component.css'],
})
export class StudentDashboardEnrollmentComponent implements OnInit {
  data: any;
  semesterinfo: any;
  courses: any;
  semester: any;
  activateyr: any;
  signUpForm: FormGroup;
  studentdata: any;

  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private loginenrollment: LoginController,
    private semester_controller: SemesterController
  ) {
    this.signUpForm = new FormGroup({
      courseid: new FormControl(null, [Validators.required]),
      student_status: new FormControl(null, [Validators.required]),
      student_yr_level: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadcourses();
    this.getyearandsem();
    this.studentdata = this.loginenrollment.getuserdetails();
  }

  loadcourses() {
    this.college_enrollment.getcourses().subscribe((res) => {
      this.data = res;
      this.courses = this.data[0];
      console.log(this.courses);
    });
  }

  getyearandsem() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.semesterinfo = res;
      if (this.semesterinfo[0]) {
        this.semester = this.semesterinfo[0][0]['semester'];
        this.activateyr = this.semesterinfo[0][0]['active_year'];
        console.log(this.semesterinfo);
      } else {
        console.log(this.semesterinfo);
      }
    });
  }

  signUp() {
    this.college_enrollment
      .addacadtransac({
        student_id: this.studentdata[0]['id'],
        courseid: this.signUpForm.value.courseid,
        student_status: this.signUpForm.value.student_status,
        student_yr_level: this.signUpForm.value.student_status,
      })
      .subscribe((res) => {
        console.log(res);
      });
    console.log(this.studentdata[0]['id']);
    console.log(this.signUpForm.value.courseid);
  }
}
