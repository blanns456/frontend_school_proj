import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';

@Component({
  selector: 'app-enroll-college2',
  templateUrl: './enroll-college2.component.html',
  styleUrls: ['./enroll-college2.component.css']
})
export class EnrollCollege2Component implements OnInit{
  constructor(private college_enrollment:CollegeEnrollmentController,private router: Router) { }
  currentPage: number = 2; // Initialize with a default page
  totalPages: number = 4; // Replace with your actual total page count
  ngOnInit(): void {
    console.log(this.college_enrollment.collegeinfo);
    if (
      this.college_enrollment.collegeinfo.year_level.length === 0 ||
      this.college_enrollment.collegeinfo.academic_year.length === 0 ||
      this.college_enrollment.collegeinfo.course.length === 0 ||
      this.college_enrollment.collegeinfo.semester.length === 0 ||
      this.college_enrollment.collegeinfo.student_status.length === 0
    ) {
      this.onPageChanged(1);
      alert("all input must be required");
    }

  }


  onPageChanged(page: number) {
    // Update your data or perform any actions when the page changes
    page;
    // alert(this.currentPage);
    if (page === 1) {
      this.router.navigate(['/enroll-college']);
    }
    if (page === 3) {
      this.router.navigate(['/enroll-college-education-record']);
    }

    // Fetch data for the new page or update your data as needed
  }

}
