import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-dashboard-information',
  templateUrl: './student-dashboard-information.component.html',
  styleUrls: ['./student-dashboard-information.component.css'],
})
export class StudentDashboardInformationComponent implements OnInit {
  onEdit() {
    throw new Error('Method not implemented.');
  }
  studentdata: any;
  civil_statusval: any;
  firstname: any;
  loaddetails = false;
  data: any;
  date: any;

  constructor(
    private logincontroller: LoginController,
    private collegeController: CollegeEnrollmentController,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.http.get(this.logincontroller.Root_URL + 'info-student', { headers: headers })
      .subscribe({
        next: (res: any) => {
          this.data = res[0][0];
          this.date = new Date(this.data.birthdate);
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });



  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  // onEdit() {
  //   var studentdetails = {
  //     id: this.studentdata[0].id,
  //     firstname: $('#first_name').val(),
  //     middle_name: $('#middle_name').val(),
  //     last_name: $('#last_name').val(),
  //     suffix: $('#suffix').val() === '' ? '' : $('#suffix').val(),
  //     gender: $('#gender').val(),
  //     civil_status: $('#civil_status').val(),
  //     birth_date: $('#birth_date').val(),
  //     birth_place: $('#birth_place').val(),
  //     religion: $('#religion').val(),
  //     contact_number: $('#contact_number').val(),
  //     citizenship: $('#citizenship').val(),
  //     email: $('#email').val(),
  //     home_address: $('#home_address').val(),
  //     permanent_address: $('#permanent_address').val(),
  //     elem_school: $('#elem_school').val(),
  //     elem_yrgrad: $('#elem_yrgrad').val(),
  //     jhs_school: $('#jhs_school').val(),
  //     jhs_yrgrad: $('#jhs_yrgrad').val(),
  //     shs_school: $('#shs_school').val(),
  //     shs_yrgrad: $('#shs_yrgrad').val(),
  //     lastschoolattended: $('#lastschoolattended').val(),
  //     lastschool_yrattend: $('#lastschool_yrattend').val(),
  //     parent_name: $('#parent_name').val(),
  //     employed_where: $('#employed_where').val(),
  //     parent_occupation: $('#parent_occupation').val(),
  //     parent_contact: $('#parent_contact').val(),
  //     parent_home_address: $('#parent_home_address').val(),
  //     parent_permanent_address: $('#parent_permanent_address').val(),
  //   };
  //   // this.collegeController
  //   //   .updatestudent(JSON.stringify(studentdetails))
  //   //   .subscribe((res) => {
  //   //     console.log(res);
  //   //     this.logincontroller.reloadstudentdatainfo().subscribe((res) => {
  //   //       var data = res;

  //   //       this.logincontroller.setdata(data);
  //   //       Swal.fire('Success', 'Changes saved!', 'success');
  //   //       window.location.reload();
  //   //       // this.studentdata = this.logincontroller.getuserdetails();
  //   //     });
  //   //   });
  // }
}
