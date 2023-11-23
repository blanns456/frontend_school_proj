import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-college-signaturepad',
  templateUrl: './college-signaturepad.component.html',
  styleUrls: ['./college-signaturepad.component.css']
})
export class CollegeSignaturepadComponent {
   signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

    constructor(
    private college_enrollment: CollegeEnrollmentController,
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;

    console.log(base64Data);
    this.signatureNeeded = this.signaturePad.isEmpty();
    if (!this.signatureNeeded) {
      this.signatureNeeded = false;

    } else {
      Swal.fire(
      'ERROR',
       'Signature is required',
       'error'
      )
    }
  }

  currentPage: number = 4; // Initialize with a default page
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
      if (page === 3) {
        this.router.navigate(['/enroll-college-education-record']);
      }

    }

    // Fetch data for the new page or update your data as needed


}
