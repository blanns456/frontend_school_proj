import { Component, OnInit } from '@angular/core';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { HttpClient } from '@angular/common/http';
import { DeanServicesService } from 'src/app/services/dean-services.service';
import Swal from 'sweetalert2';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-approve-students-dean',
  templateUrl: './approve-students-dean.component.html',
  styleUrls: ['./approve-students-dean.component.css'],
})
export class ApproveStudentsDeanComponent implements OnInit {
  data: any;
  approveStud: any;
  approvalinfo: any;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  constructor(
    private college_enroll: CollegeEnrollmentController,
    private http: HttpClient,
    private deans: DeanServicesService
  ) { }

  ngOnInit(): void {
    this.deans.for_approval_students().subscribe({
      next: (res) => {
        this.data = res;
        this.approveStud = this.data[0];
        console.log(this.data);
      }
    })
  }

  approveStudent(acadid: any, id: any, courses_id: any, student_yr_lvl: any) {
    console.log(acadid, id, courses_id, student_yr_lvl);
    this.deans.approve_student(acadid, id, courses_id, student_yr_lvl).subscribe({
      next: (response) => {
        console.log('Request successful:', response);
      },
      error: (err) => {
        console.error('Request failed:', err);
      }
    });
  }


  // this.http
  //   .get(this.college_enroll.Root_URL + 'approve-course/' + acadid)
  //   .subscribe((res) => {
  //     this.approvalinfo = res;
  //     if (this.approvalinfo['message'] === 'success') {
  //       Swal.fire('Success', 'Student Approved', 'success').then(() =>
  //         window.location.reload()
  //       );
  //     } else {
  //       Swal.fire('ERROR', 'Please Try Again', 'error');
  //     }
  //   });


}
