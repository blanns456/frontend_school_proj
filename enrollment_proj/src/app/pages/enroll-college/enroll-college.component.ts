import { Component, OnInit } from '@angular/core';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-enroll-college',
  templateUrl: './enroll-college.component.html',
  styleUrls: ['./enroll-college.component.css']
})
export class EnrollCollegeComponent implements OnInit{
  selectedyearlvl: string |undefined ;
  selectedacademic_year: string |undefined ;
  selectedsemester: string |undefined ;
  selectedcourse: string |undefined ;
  selectedstatus: string |undefined ;



  constructor(private college_enrollment: CollegeEnrollmentController) { }

  ngOnInit(): void {
    this.selectedyearlvl = this.college_enrollment.collegeinfo.year_level;
    this.selectedacademic_year = this.college_enrollment.collegeinfo.academic_year;
    this.selectedsemester = this.college_enrollment.collegeinfo.semester;
    this.selectedcourse = this.college_enrollment.collegeinfo.course;
    this.selectedstatus = this.college_enrollment.collegeinfo.student_status;
  }

  onChange(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.academic_year = selectedValue;
    // alert(selectedValue);
  }
  onyearlvl(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.year_level = selectedValue;

  }
  semester(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.semester = selectedValue;

  }
  course(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.course = selectedValue;

  }

  status(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.student_status = selectedValue;

  }




}
