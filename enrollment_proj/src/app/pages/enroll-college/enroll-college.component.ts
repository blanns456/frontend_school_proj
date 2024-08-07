import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-college',
  templateUrl: './enroll-college.component.html',
  styleUrls: ['./enroll-college.component.css'],
})
export class EnrollCollegeComponent implements OnInit {
  data: any;
  courses: any;
  yearLvl: any;
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
    this.loadcourses();
    this.selectedyearlvl = this.college_enrollment.collegeinfo.year_level;
    this.selectedstatus = this.college_enrollment.collegeinfo.student_status;
  }

  loadcourses() {
    this.college_enrollment.getcourses().subscribe((res) => {
      this.data = res;
      this.courses = this.data[0];
      console.log(this.courses);
    });
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
      !this.college_enrollment.collegeinfo.student_status
    ) {
      this.selectedacademic_selectedyearlvl =
        !this.college_enrollment.collegeinfo.year_level;

      this.selectedacademic_selectedstatus =
        !this.college_enrollment.collegeinfo.student_status;

      Swal.fire('ERROR', 'All input must be required', 'error');

      // alert(');
    } else {
      page;
      // alert(this.currentPage);
      if (page === 2) {
        this.router.navigate(['/enroll-college-student-information']);
      }
      if (page === 3) {
        this.router.navigate(['/enroll-college-education-record']);
      }
      if (page === 4) {
        this.router.navigate(['/enroll-college-signature']);
      }
    }

    // Fetch data for the new page or update your data as needed
  }
}
