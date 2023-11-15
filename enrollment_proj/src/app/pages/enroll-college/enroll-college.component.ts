import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-college',
  templateUrl: './enroll-college.component.html',
  styleUrls: ['./enroll-college.component.css'],
})
export class EnrollCollegeComponent implements OnInit {
  selectedyearlvl: string | undefined;
  selectedacademic_yearisEmpty = false;
  selectedacademic_selectedsemester = false;
  selectedacademic_selectedcourse = false;
  selectedacademic_selectedstatus = false;
  selectedacademic_selectedyearlvl = false;
  selectedacademic_year: string | undefined;
  selectedsemester: string | undefined;
  selectedcourse: string | undefined;
  selectedstatus: string | undefined;

  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedyearlvl = this.college_enrollment.collegeinfo.year_level;
    this.selectedacademic_year =
      this.college_enrollment.collegeinfo.academic_year;
    this.selectedsemester = this.college_enrollment.collegeinfo.semester;
    this.selectedcourse = this.college_enrollment.collegeinfo.course;
    this.selectedstatus = this.college_enrollment.collegeinfo.student_status;
  }

  onChange(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedacademic_yearisEmpty = !selectedValue;
    this.college_enrollment.collegeinfo.academic_year = selectedValue;
    // alert(selectedValue);
  }
  onyearlvl(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedacademic_selectedyearlvl = !selectedValue;
    this.college_enrollment.collegeinfo.year_level = selectedValue;
  }
  semester(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedacademic_selectedsemester = !selectedValue;
    this.college_enrollment.collegeinfo.semester = selectedValue;
  }
  course(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedacademic_selectedcourse = !selectedValue;
    this.college_enrollment.collegeinfo.course = selectedValue;
  }

  status(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedacademic_selectedstatus = !selectedValue;
    this.college_enrollment.collegeinfo.student_status = selectedValue;
  }

  currentPage: number = 1; // Initialize with a default page
  totalPages: number = 4; // Replace with your actual total page count

  onPageChanged(page: number) {
    // Update your data or perform any actions when the page changes
    if (
      !this.college_enrollment.collegeinfo.year_level ||
      !this.college_enrollment.collegeinfo.academic_year ||
      !this.college_enrollment.collegeinfo.course ||
      !this.college_enrollment.collegeinfo.semester ||
      !this.college_enrollment.collegeinfo.student_status
    ) {
      this.selectedacademic_yearisEmpty =
        !this.college_enrollment.collegeinfo.academic_year;

      this.selectedacademic_selectedyearlvl =
        !this.college_enrollment.collegeinfo.year_level;

      this.selectedacademic_selectedsemester =
        !this.college_enrollment.collegeinfo.semester;

      this.selectedacademic_selectedstatus =
        !this.college_enrollment.collegeinfo.student_status;

      this.selectedacademic_selectedcourse =
        !this.college_enrollment.collegeinfo.course;

      alert('all input must be required');
    } else {
      page;
      // alert(this.currentPage);
      if (page === 2) {
        this.router.navigate(['/enroll-college-student-information']);
      }
      if (page === 3) {
        this.router.navigate(['/enroll-college-education-record']);
      }
    }

    // Fetch data for the new page or update your data as needed
  }
}
