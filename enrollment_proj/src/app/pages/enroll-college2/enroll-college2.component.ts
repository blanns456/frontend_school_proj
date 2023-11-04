import { Component, OnInit } from '@angular/core';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';

@Component({
  selector: 'app-enroll-college2',
  templateUrl: './enroll-college2.component.html',
  styleUrls: ['./enroll-college2.component.css']
})
export class EnrollCollege2Component implements OnInit{
  constructor(private college_enrollment:CollegeEnrollmentController) { }
  ngOnInit(): void {
    console.log(this.college_enrollment.collegeinfo);
  }

}
