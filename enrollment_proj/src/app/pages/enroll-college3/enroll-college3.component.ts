import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-enroll-college3',
  templateUrl: './enroll-college3.component.html',
  styleUrls: ['./enroll-college3.component.css']
})
export class EnrollCollege3Component implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {

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
