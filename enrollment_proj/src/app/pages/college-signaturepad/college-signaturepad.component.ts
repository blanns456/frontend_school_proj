import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-college-signaturepad',
  templateUrl: './college-signaturepad.component.html',
  styleUrls: ['./college-signaturepad.component.css'],
})
export class CollegeSignaturepadComponent {
  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  info: any;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;

  constructor(
    private college_enrollment: CollegeEnrollmentController,
    private router: Router
  ) {}

  ngOnInit(): void {}
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

    this.signatureNeeded = this.signaturePad.isEmpty();
    if (!this.signatureNeeded) {
      this.signatureNeeded = false;
      this.college_enrollment.collegeinfo.signature = base64Data;
      console.log(this.college_enrollment.collegeinfo);
      this.onSubmit();
    } else {
      Swal.fire('ERROR', 'Signature is required', 'error');
    }
  }

  onSubmit() {
    var dataform = {
      year_level: this.college_enrollment.collegeinfo.year_level,
      course: this.college_enrollment.collegeinfo.course,
      semester: this.college_enrollment.collegeinfo.semester,
      student_status: this.college_enrollment.collegeinfo.status,
      lastname: this.college_enrollment.collegeinfo.lastname,
      firstname: this.college_enrollment.collegeinfo.firstname,
      middlename: this.college_enrollment.collegeinfo.middlename,
      suffix: this.college_enrollment.collegeinfo.suffix,
      birthdate: this.college_enrollment.collegeinfo.birthdate,
      religion: this.college_enrollment.collegeinfo.religion,
      email_address: this.college_enrollment.collegeinfo.email_address,
      birth_place: this.college_enrollment.collegeinfo.birth_place,
      citizenship: this.college_enrollment.collegeinfo.citizenship,
      contact_number: this.college_enrollment.collegeinfo.contactnumber,
      gender: this.college_enrollment.collegeinfo.gender,
      civil_status: this.college_enrollment.collegeinfo.civilstatus,
      permanent_address: this.college_enrollment.collegeinfo.permanentaddress,
      home_address: this.college_enrollment.collegeinfo.homeaddress,
      elemschool: this.college_enrollment.collegeinfo.elemschool,
      elemyg: this.college_enrollment.collegeinfo.elemyg,
      jhschool: this.college_enrollment.collegeinfo.jhschool,
      jhsyg: this.college_enrollment.collegeinfo.jhsyg,
      shschool: this.college_enrollment.collegeinfo.shschool,
      shsyg: this.college_enrollment.collegeinfo.shsyg,
      parentsOrguradian: this.college_enrollment.collegeinfo.parentsOrguradian,
      parentsOccupation: this.college_enrollment.collegeinfo.parentsOccupation,
      parentcontactnumber:
        this.college_enrollment.collegeinfo.parentcontactnumber,
      schoollastattended:
        this.college_enrollment.collegeinfo.schoollastattended,
      lastschoolyearattended:
        this.college_enrollment.collegeinfo.lastschoolyearattended,
      signature: this.college_enrollment.collegeinfo.signature,
    };

    this.college_enrollment.createstudent(dataform).subscribe((res) => {
      this.info = res;
      console.log(this.info);
      if (this.info[0]['message'] === 'ERROR') {
        Swal.fire('Error', 'error', 'error');

        return;
      } else {
        // this.loadusers();
        Swal.fire('Success', 'Added Successfully', 'success').then((e) => {
          window.location.reload();
        });
        return;
      }
    });
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
