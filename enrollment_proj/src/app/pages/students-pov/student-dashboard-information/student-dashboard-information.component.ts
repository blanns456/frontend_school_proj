import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginController } from 'src/app/controllers/login_controller.component';
declare var $: any;

@Component({
  selector: 'app-student-dashboard-information',
  templateUrl: './student-dashboard-information.component.html',
  styleUrls: ['./student-dashboard-information.component.css'],
})
export class StudentDashboardInformationComponent implements OnInit {
  studentdata: any;
  civil_statusval: any;
  loaddetails = false;
  UpdateStudInfoForm: FormGroup = this.formBuilder.group({
    first_name: ['', [Validators.required]],
    middle_name: ['', [Validators.required, Validators.email]],
    lastname: ['', [Validators.required]],
  });
  constructor(
    private logincontroller: LoginController,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();
    this.loaddetails = true;
  }

  onSave() {}
}
