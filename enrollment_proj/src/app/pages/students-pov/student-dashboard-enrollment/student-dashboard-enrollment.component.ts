import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import * as $ from 'jquery'; // kini sa pgdeclare nis $

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
  checker: any;
  studname: string | undefined;

  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private loginenrollment: LoginController,
    private semester_controller: SemesterController,
    private router: Router
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
    // this.studentdata = this.loginenrollment.getuserdetails();
    this.studname = this.studentdata[0]['id'];
    this.checkEnrollment();
  }

  checkEnrollment() {
    this.semester_controller
      .checkEnrollee({ stud_id: this.studname })
      .subscribe((res) => {
        this.data = res;
        this.checker = this.data[0][0].id;
        if (this.checker == 1) {
          $('#for_enroll').addClass('d-none');
        } else {
          $('#enrolled').addClass('d-none');
        }
        // console.log(this.checker);
      });
  }

  loadcourses() {
    this.college_enrollment.getcourses().subscribe((res) => {
      this.data = res;
      this.courses = this.data[0];
      // console.log(this.courses);
    });
  }

  getyearandsem() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.semesterinfo = res;
      if (this.semesterinfo[0]) {
        this.semester = this.semesterinfo[0][0]['semester'];
        this.activateyr = this.semesterinfo[0][0]['active_year'];
        // console.log(this.semesterinfo);
      } else {
        // console.log(this.semesterinfo);
      }
    });
  }

  signUp() {
    this.college_enrollment
      .addacadtransac({
        student_id: this.studentdata[0]['id'],
        courseid: this.signUpForm.value.courseid,
        student_status: this.signUpForm.value.student_status,
        student_yr_level: this.signUpForm.value.student_yr_level,
      })
      .subscribe((res) => {
        // console.log(res);
        this.checkEnrollment();
        this.router.navigate(['student-dashboard-prospectus']);
      });
    // console.log(this.studentdata[0]['id']);
    // console.log(this.signUpForm.value.courseid);
  }
}
