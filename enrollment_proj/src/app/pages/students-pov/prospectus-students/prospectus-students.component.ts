import { Component, OnInit } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';

@Component({
  selector: 'app-prospectus-students',
  templateUrl: './prospectus-students.component.html',
  styleUrls: ['./prospectus-students.component.css'],
})
export class ProspectusStudentsComponent implements OnInit {
  data: any;
  prospectus: any = [];
  totalUnits: number = 0;
  studentdata: any;

  constructor(
    private prospectus_get: ProspectusController,
    private college_controller: CollegeEnrollmentController,
    private logincontroller: LoginController,
    private http: HttpClient
  ) {}

  getProspectus = {
    course: '1',
    year_lvl: '1',
  };

  studentProspectus() {
    this.http
      .post(
        this.prospectus_get.Root_URL + 'student-prospectus',
        this.getProspectus
      )
      .subscribe((prospectus_filter) => {
        this.data = prospectus_filter;
        this.prospectus = this.data[0];
        console.log(this.data);
      });
  }

  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();
    this.studentProspectus();
    this.getactivateprospectos();
  }

  selectAll(event: any) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = event.target.checked;
    });

    this.calculateTotalUnits();
  }

  updateTotalUnits(event: any, units: string) {
    this.calculateTotalUnits();
    this.checkAllCheckbox();
  }

  checkAllCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allCheckbox = document.getElementById(
      'allButton'
    ) as HTMLInputElement;

    const allChecked = Array.from(checkboxes).every(
      (checkbox) => (checkbox as HTMLInputElement).checked
    );

    allCheckbox.checked = allChecked;
  }

  calculateTotalUnits() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]'
    );

    this.totalUnits = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .reduce((sum, checkbox) => {
        console.log(checkbox.value.split(',')[1]);
        const checkboxValue = parseFloat(checkbox.value.split(',')[1]);
        return isNaN(checkboxValue) ? sum : sum + checkboxValue;
      }, 0);

    this.checkAllCheckbox();
  }

  onsubmit() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]'
    );
    const subjectids = JSON.stringify(
      Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((e) => e.value[0])
    );

    this.college_controller
      .addcollegetrancsaction({ subjectdata: subjectids })
      .subscribe((res) => {
        console.log(res);
      });
    console.log(subjectids);
  }

  getactivateprospectos() {
    console.log(this.studentdata);
    this.college_controller
      .gettransaction({ studentid: '1', courseid: '1' })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
