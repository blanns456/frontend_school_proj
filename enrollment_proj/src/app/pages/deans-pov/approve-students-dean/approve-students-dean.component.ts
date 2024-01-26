import { Component, OnInit } from '@angular/core';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approve-students-dean',
  templateUrl: './approve-students-dean.component.html',
  styleUrls: ['./approve-students-dean.component.css'],
})
export class ApproveStudentsDeanComponent implements OnInit {
  data: any;
  approveStud: any;
  approvalinfo: any;
  constructor(
    private college_enroll: CollegeEnrollmentController,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get(this.college_enroll.Root_URL + 'for_approval_students')
      .subscribe((res) => {
        this.data = res;
        this.approveStud = this.data[0];
        // console.log(this.approveStud);
      });
  }
  approvestudent(acadid: string) {
    this.http
      .get(this.college_enroll.Root_URL + 'approve_students/' + acadid)
      .subscribe((res) => {
        this.approvalinfo = res;
        if (this.approvalinfo['message'] === 'success') {
          Swal.fire('Success', 'Student Approved', 'success').then(() =>
            window.location.reload()
          );
        } else {
          Swal.fire('ERROR', 'Please Try Again', 'error');
        }
      });
  }
}
