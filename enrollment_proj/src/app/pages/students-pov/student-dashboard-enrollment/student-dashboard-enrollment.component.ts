import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
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

  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private semester_controller: SemesterController
  ) {}
  ngOnInit(): void {
    this.loadcourses();
    this.getyearandsem();
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
}
