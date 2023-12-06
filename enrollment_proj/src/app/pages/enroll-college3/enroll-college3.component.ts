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

  constructor(private router: Router, private college_enrollment: CollegeEnrollmentController) { }
  elemschoolval: string = '';
  elemschoolyrval: string = '';
  jhsval: string = '';
  jhsyrval: string = '';
  shsval: string = '';
  shsyrval: string = '';
  parentguardianval: string = '';
  occupationval: string = '';
  parentnumberval: string = '';
  last_schoolval: string = '';
  last_schoolyrval: string = '';

  ngOnInit(): void {
    console.log(this.college_enrollment);
  }

  elemschool(event: Event) {
    // Your change event handler logic here
    const elemschoolval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.elemschool = elemschoolval;
    // alert(elemschoolval);
  }

   jhs(event: Event) {
    // Your change event handler logic here
    const jhsval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.jhschool = jhsval;
    // alert(jhsval);
  }

   shs(event: Event) {
    // Your change event handler logic here
    const shsval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.shschool = shsval;
    // alert(shsval);
  }

   elemyr(event: Event) {
    // Your change event handler logic here
    const elemschoolyrval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.elemyg = elemschoolyrval;
    // alert(elemschoolyrval);
  }

  jhsyr(event: Event) {
    // Your change event handler logic here
    const jhsyrval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.jhsyg = jhsyrval;
    // alert(jhsyrval);
  }

  shsyr(event: Event) {
    // Your change event handler logic here
    const shsyrval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.shsyg = shsyrval;
    // alert(shsyrval);
  }

  parentguardian(event: Event) {
    // Your change event handler logic here
    const parentguardianval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.parentsOrguradian = parentguardianval;
    // alert(parentguardianval);
  }

  occupation(event: Event) {
    // Your change event handler logic here
    const occupationval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.parentsOccupation = occupationval;
    // alert(occupationval);
  }

  parentnumber(event: Event) {
    // Your change event handler logic here
    const parentnumberval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.parentcontactnumber = parentnumberval;
    // alert(parentnumberval);
  }

  last_school(event: Event) {
    // Your change event handler logic here
    const last_schoolval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.schoollastattended = last_schoolval;
    // alert(last_schoolval);
  }

  last_schoolyr(event: Event) {
    // Your change event handler logic here
    const last_schoolyrval = (event.target as HTMLSelectElement).value;
    // this.lastnameisEmpty = lastnameval === '';
    // this.lastnameisEmpty = true;
    this.college_enrollment.collegeinfo.lastschoolyearattended = last_schoolyrval;
    // alert(last_schoolyrval);
  }

  currentPage: number = 3; // Initialize with a default page
  totalPages: number = 4; // Replace with your actual total page count

  onPageChanged(page: number) {
    // Update your data or perform any actions when the page changes
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

    // Fetch data for the new page or update your data as needed
  }
}
