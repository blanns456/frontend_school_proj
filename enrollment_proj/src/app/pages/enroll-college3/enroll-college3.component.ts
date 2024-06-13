import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-enroll-college3',
  templateUrl: './enroll-college3.component.html',
  styleUrls: ['./enroll-college3.component.css']
})
export class EnrollCollege3Component implements OnInit{

  constructor(
    private router: Router,
    private college_enrollment: CollegeEnrollmentController
  ) {}
  currentPage: number = 3; // Initialize with a default page
  totalPages: number = 4; // Replace with your actual total page count
  elemschoolval: string = '';
  elemschoolvalisEmpty = false;
  elemschoolyrval: string = '';
  elemschoolyrvalisEmpty = false;
  jhsval: string = '';
  jhsvalisEmpty = false;
  jhsyrval: string = '';
  jhsyrvalisEmpty = false;
  shsval: string = '';
  shsvalisEmpty = false;
  shsyrval: string = '';
  shsyrvalisEmpty = false;
  parentguardianval: string = '';
  parentguardianvalisEmpty = false;
  occupationval: string = '';
  occupationvalisEmpty = false;
  parentnumberval: string = '';
  parentnumbervalisEmpty = false;
  last_schoolval: string = '';
  last_schoolvalisEmpty = false;
  last_schoolyrval: string = '';
  last_schoolyrvalisEmpty = false;

  ngOnInit(): void {
    this.elemschoolval = this.college_enrollment.collegeinfo.elemschool;
    this.elemschoolyrval = this.college_enrollment.collegeinfo.elemyg;
    this.jhsval = this.college_enrollment.collegeinfo.jhschool;
    this.jhsyrval = this.college_enrollment.collegeinfo.jhsyg;
    this.shsval = this.college_enrollment.collegeinfo.shschool;
    this.shsyrval = this.college_enrollment.collegeinfo.shsyg;
    this.parentguardianval = this.college_enrollment.collegeinfo.parentsOrguradian;
    this.occupationval = this.college_enrollment.collegeinfo.parentsOccupation;
    this.parentnumberval = this.college_enrollment.collegeinfo.parentcontactnumber;
    this.last_schoolval = this.college_enrollment.collegeinfo.schoollastattended;
    this.last_schoolyrval = this.college_enrollment.collegeinfo.lastschoolyearattended;
  }

  elemschool(event: Event) {
    // Your change event handler logic here
    const elemschoolval = (event.target as HTMLSelectElement).value;
    this.elemschoolvalisEmpty = elemschoolval === '';
    this.college_enrollment.collegeinfo.elemschool = elemschoolval;
  }

   jhs(event: Event) {
    // Your change event handler logic here
    const jhsval = (event.target as HTMLSelectElement).value;
    this.jhsvalisEmpty = jhsval === '';
    this.college_enrollment.collegeinfo.jhschool = jhsval;
  }

   shs(event: Event) {
    // Your change event handler logic here
    const shsval = (event.target as HTMLSelectElement).value;
    this.shsvalisEmpty = shsval === '';
    this.college_enrollment.collegeinfo.shschool = shsval;
  }

   elemyr(event: Event) {
    // Your change event handler logic here
    const elemschoolyrval = (event.target as HTMLSelectElement).value;
    this.elemschoolyrvalisEmpty = elemschoolyrval === '';
    this.college_enrollment.collegeinfo.elemyg = elemschoolyrval;
  }

  jhsyr(event: Event) {
    // Your change event handler logic here
    const jhsyrval = (event.target as HTMLSelectElement).value;
    this.jhsyrvalisEmpty = jhsyrval === '';
    this.college_enrollment.collegeinfo.jhsyg = jhsyrval;
  }

  shsyr(event: Event) {
    // Your change event handler logic here
    const shsyrval = (event.target as HTMLSelectElement).value;
    this.shsyrvalisEmpty = shsyrval === '';
    this.college_enrollment.collegeinfo.shsyg = shsyrval;
  }

  parentguardian(event: Event) {
    // Your change event handler logic here
    const parentguardianval = (event.target as HTMLSelectElement).value;
    this.parentguardianvalisEmpty = parentguardianval === '';
    this.college_enrollment.collegeinfo.parentsOrguradian = parentguardianval;
  }

  occupation(event: Event) {
    // Your change event handler logic here
    const occupationval = (event.target as HTMLSelectElement).value;
    this.occupationvalisEmpty = occupationval === '';
    this.college_enrollment.collegeinfo.parentsOccupation = occupationval;
  }

  parentnumber(event: Event) {
    // Your change event handler logic here
    const parentnumberval = (event.target as HTMLSelectElement).value;
    this.parentnumbervalisEmpty = parentnumberval === '';
    this.college_enrollment.collegeinfo.parentcontactnumber = parentnumberval;
  }

  last_school(event: Event) {
    // Your change event handler logic here
    const last_schoolval = (event.target as HTMLSelectElement).value;
    this.last_schoolvalisEmpty = last_schoolval === '';
    this.college_enrollment.collegeinfo.schoollastattended = last_schoolval;
  }

  last_schoolyr(event: Event) {
    // Your change event handler logic here
    const last_schoolyrval = (event.target as HTMLSelectElement).value;
    this.last_schoolyrvalisEmpty = last_schoolyrval === '';
    this.college_enrollment.collegeinfo.lastschoolyearattended = last_schoolyrval;
  }

  onPageChanged(page: number) {
    if (page > this.currentPage) {
      if (
        !this.college_enrollment.collegeinfo.elemschool ||
        !this.college_enrollment.collegeinfo.elemyg ||
        !this.college_enrollment.collegeinfo.jhschool ||
        !this.college_enrollment.collegeinfo.jhsyg ||
        !this.college_enrollment.collegeinfo.shschool ||
        !this.college_enrollment.collegeinfo.shsyg ||
        !this.college_enrollment.collegeinfo.parentsOrguradian ||
        !this.college_enrollment.collegeinfo.parentsOccupation ||
        !this.college_enrollment.collegeinfo.parentcontactnumber ||
        !this.college_enrollment.collegeinfo.lastschoolyearattended ||
        !this.college_enrollment.collegeinfo.schoollastattended
      ) {
        this.elemschoolvalisEmpty =
          !this.college_enrollment.collegeinfo.elemschool;

        this.elemschoolyrvalisEmpty =
          !this.college_enrollment.collegeinfo.elemyg;

        this.jhsvalisEmpty =
          !this.college_enrollment.collegeinfo.jhschool;

        this.jhsyrvalisEmpty =
          !this.college_enrollment.collegeinfo.jhsyg;

        this.shsvalisEmpty =
          !this.college_enrollment.collegeinfo.shschool;

        this.shsyrvalisEmpty =
          !this.college_enrollment.collegeinfo.shsyg;

        this.parentguardianvalisEmpty =
          !this.college_enrollment.collegeinfo.parentsOrguradian;

        this.occupationvalisEmpty =
          !this.college_enrollment.collegeinfo.parentsOccupation;

        this.parentnumbervalisEmpty =
          !this.college_enrollment.collegeinfo.parentcontactnumber;

        this.last_schoolvalisEmpty =
          !this.college_enrollment.collegeinfo.lastschoolyearattended;

        this.last_schoolyrvalisEmpty =
          !this.college_enrollment.collegeinfo.schoollastattended;

        Swal.fire(
      'ERROR',
       'All input must be required',
       'error'
        )
      }
      else {
      page;
      // alert(this.currentPage);
    if (page === 1) {
      this.router.navigate(['/enroll-college']);
    }
    if (page === 2) {
      this.router.navigate(['/enroll-college-student-information']);
    }
    if (page === 4) {
        this.router.navigate(['/enroll-college-signature']);
    }
    }
    } else {
      page;
      // alert(this.currentPage);
      if (page === 1) {
        this.router.navigate(['/enroll-college']);
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

  // onPageChanged(page: number) {
  //   // Update your data or perform any actions when the page changes
  //   page;
  //   // alert(this.currentPage);
  //   if (page === 1) {
  //     this.router.navigate(['/enroll-college']);
  //   }
  //   if (page === 2) {
  //     this.router.navigate(['/enroll-college-student-information']);
  //   }
  //   if (page === 4) {
  //       this.router.navigate(['/enroll-college-signature']);
  //   }

  //   // Fetch data for the new page or update your data as needed
  // }
}
