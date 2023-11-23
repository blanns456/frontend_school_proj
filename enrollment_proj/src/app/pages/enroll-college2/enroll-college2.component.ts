import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enroll-college2',
  templateUrl: './enroll-college2.component.html',
  styleUrls: ['./enroll-college2.component.css'],
})
export class EnrollCollege2Component implements OnInit {
  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private router: Router
  ) {}
  currentPage: number = 2; // Initialize with a default page
  totalPages: number = 4; // Replace with your actual total page count
  lastnameval: string = '';
  lastnameisEmpty = false;
  firstnameval: string = '';
  firstnamevalisEmpty = false;
  middlenameval: string = '';
  middlenamevalisEmpty = false;
  suffixval: string = '';
  birthdateval: string = '';
  birthdatevalisEmpty = false;
  religionval: string = '';
  religionvalisEmpty = false;
  email_addressval: string = '';
  email_addressvalisEmpty = false;
  birth_placeval: string = '';
  birth_placevalisEmpty = false;
  citizenshipval: string = '';
  citizenshipvalisEmpty = false;
  contactnumberval: string = '';
  contactnumbervalisEmpty = false;
  genderval: string = '';
  gendervalisEmpty = false;
  civilstatusval: string = '';
  civilstatusvalisEmpty = false;
  permanentaddressval: string = '';
  permanentaddressvalisEmpty = false;
  homeaddressval: string = '';
  homeaddressvalisEmpty = false;

  ngOnInit(): void {
    this.lastnameval = this.college_enrollment.collegeinfo.lastname;
    this.firstnameval = this.college_enrollment.collegeinfo.firstname;
    this.middlenameval = this.college_enrollment.collegeinfo.middlename;
    this.suffixval = this.college_enrollment.collegeinfo.suffix;
    this.birthdateval = this.college_enrollment.collegeinfo.birthdate;
    this.religionval = this.college_enrollment.collegeinfo.religion;
    this.email_addressval = this.college_enrollment.collegeinfo.email_address;
    this.birth_placeval = this.college_enrollment.collegeinfo.birth_place;
    this.citizenshipval = this.college_enrollment.collegeinfo.citizenship;
    this.contactnumberval = this.college_enrollment.collegeinfo.contactnumber;
    this.genderval = this.college_enrollment.collegeinfo.gender;
    this.civilstatusval = this.college_enrollment.collegeinfo.civilstatus;
    this.permanentaddressval =
      this.college_enrollment.collegeinfo.permanentaddress;
    this.homeaddressval = this.college_enrollment.collegeinfo.homeaddress;

    if (
      this.college_enrollment.collegeinfo.year_level.length === 0 ||
      this.college_enrollment.collegeinfo.academic_year.length === 0 ||
      this.college_enrollment.collegeinfo.course.length === 0 ||
      this.college_enrollment.collegeinfo.semester.length === 0 ||
      this.college_enrollment.collegeinfo.student_status.length === 0
    ) {
      this.router.navigate(['/enroll-college']);
    }
  }



  lastname(event: Event) {
    // Your change event handler logic here
    const lastnameval = (event.target as HTMLSelectElement).value;
    this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.lastname = lastnameval;
    // alert(lastnameval);
  }

  firstname(event: Event) {
    // Your change event handler logic here
    const firstnameval = (event.target as HTMLSelectElement).value;
    this.firstnamevalisEmpty = firstnameval === '';
    this.college_enrollment.collegeinfo.firstname = firstnameval;
    // alert(lastnameval);
  }

  middlename(event: Event) {
    // Your change event handler logic here
    const middlenameval = (event.target as HTMLSelectElement).value;
    this.middlenamevalisEmpty = middlenameval === '';
    this.college_enrollment.collegeinfo.middlename = middlenameval;
    // alert(lastnameval);
  }

  suffix(event: Event) {
    // Your change event handler logic here
    const suffixval = (event.target as HTMLSelectElement).value;
    this.college_enrollment.collegeinfo.suffix = suffixval;
    // alert(lastnameval);
  }

  birthdate(event: Event) {
    // Your change event handler logic here
    const birthdateval = (event.target as HTMLSelectElement).value;
     this.birthdatevalisEmpty = birthdateval === '';
    this.college_enrollment.collegeinfo.birthdate = birthdateval;
    // alert(lastnameval);
  }

  religion(event: Event) {
    // Your change event handler logic here
    const religionval = (event.target as HTMLSelectElement).value;
    this.religionvalisEmpty = religionval === '';
    this.college_enrollment.collegeinfo.religion = religionval;
    // alert(lastnameval);
  }

  email_address(event: Event) {
    // Your change event handler logic here
    const email_addressval = (event.target as HTMLSelectElement).value;
    this.email_addressvalisEmpty = email_addressval === '';
    this.college_enrollment.collegeinfo.email_address = email_addressval;
    // alert(lastnameval);
  }

  birth_place(event: Event) {
    // Your change event handler logic here
    const birth_placeval = (event.target as HTMLSelectElement).value;
    this.birth_placevalisEmpty = birth_placeval === '';
    this.college_enrollment.collegeinfo.birth_place = birth_placeval;
    // alert(lastnameval);
  }

  citizenship(event: Event) {
    // Your change event handler logic here
    const citizenshipval = (event.target as HTMLSelectElement).value;
    this.citizenshipvalisEmpty = citizenshipval === '';
    this.college_enrollment.collegeinfo.citizenship = citizenshipval;
    // alert(lastnameval);
  }

  contactnumber(event: Event) {
    // Your change event handler logic here
    const contactnumberval = (event.target as HTMLSelectElement).value;
    this.contactnumbervalisEmpty = contactnumberval === '';
    this.college_enrollment.collegeinfo.contactnumber = contactnumberval;
    // alert(lastnameval);
  }

  gender(event: Event) {
    // Your change event handler logic here
    const genderval = (event.target as HTMLSelectElement).value;
    this.gendervalisEmpty = genderval === '';
    this.college_enrollment.collegeinfo.gender = genderval;
    // alert(lastnameval);
  }

  civilstatus(event: Event) {
    // Your change event handler logic here
    const civilstatusval = (event.target as HTMLSelectElement).value;
    this.civilstatusvalisEmpty = civilstatusval === '';
    this.college_enrollment.collegeinfo.civilstatus = civilstatusval;
    // alert(lastnameval);
  }

  permanentaddress(event: Event) {
    // Your change event handler logic here
    const permanentaddressval = (event.target as HTMLSelectElement).value;
    this.permanentaddressvalisEmpty = permanentaddressval === '';
    this.college_enrollment.collegeinfo.permanentaddress = permanentaddressval;
    // alert(lastnameval);
  }

  homeaddress(event: Event) {
    // Your change event handler logic here
    const homeaddressval = (event.target as HTMLSelectElement).value;
    this.homeaddressvalisEmpty = homeaddressval === '';
    this.college_enrollment.collegeinfo.homeaddress = homeaddressval;
    // alert(lastnameval);
  }

  onPageChanged(page: number) {
    if (page > this.currentPage) {
      if (
        !this.college_enrollment.collegeinfo.lastname ||
        !this.college_enrollment.collegeinfo.firstname ||
        !this.college_enrollment.collegeinfo.middlename ||
        !this.college_enrollment.collegeinfo.birthdate ||
        !this.college_enrollment.collegeinfo.religion ||
        !this.college_enrollment.collegeinfo.email_address ||
        !this.college_enrollment.collegeinfo.birth_place ||
        !this.college_enrollment.collegeinfo.citizenship ||
        !this.college_enrollment.collegeinfo.contactnumber ||
        !this.college_enrollment.collegeinfo.civilstatus ||
        !this.college_enrollment.collegeinfo.gender ||
        !this.college_enrollment.collegeinfo.permanentaddress ||
        !this.college_enrollment.collegeinfo.homeaddress
      ) {
        this.lastnameisEmpty =
          !this.college_enrollment.collegeinfo.lastname;

        this.firstnamevalisEmpty =
          !this.college_enrollment.collegeinfo.firstname;

        this.middlenamevalisEmpty =
          !this.college_enrollment.collegeinfo.middlename;

        this.birthdatevalisEmpty =
          !this.college_enrollment.collegeinfo.birthdate;

        this.religionvalisEmpty =
          !this.college_enrollment.collegeinfo.religion;

        this.email_addressvalisEmpty =
          !this.college_enrollment.collegeinfo.email_address;

        this.birth_placevalisEmpty =
          !this.college_enrollment.collegeinfo.birth_place;

        this.citizenshipvalisEmpty =
          !this.college_enrollment.collegeinfo.citizenship;

        this.contactnumbervalisEmpty =
          !this.college_enrollment.collegeinfo.contactnumber;

        this.gendervalisEmpty =
          !this.college_enrollment.collegeinfo.gender;

        this.civilstatusvalisEmpty =
          !this.college_enrollment.collegeinfo.civilstatus;

        this.permanentaddressvalisEmpty =
          !this.college_enrollment.collegeinfo.permanentaddress;

        this.homeaddressvalisEmpty =
          !this.college_enrollment.collegeinfo.homeaddress;

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
      if (page === 3) {
        this.router.navigate(['/enroll-college-education-record']);
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
}

