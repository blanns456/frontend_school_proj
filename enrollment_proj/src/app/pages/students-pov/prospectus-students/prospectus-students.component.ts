import { Component, OnInit } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import Swal from 'sweetalert2';

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
  acadtransac: any;
  transacnotif: any;
  acadid: any;
  semesterinfo: any;
  activateyr: any;
  semester: any;
  isalreadyenrolled: any;
  alreadysubmitted: boolean | undefined;

  constructor(
    private prospectus_get: ProspectusController,
    private college_controller: CollegeEnrollmentController,
    private logincontroller: LoginController,
    private semester_controller: SemesterController
  ) {}

  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();
    this.getactivateprospectos();
    this.getyearandsem();
  }

  studentProspectus(yrlvl: string, acad: string) {
    console.log([yrlvl, String(acad)]);
    this.prospectus_get
      .studprospectus({
        year_lvl: yrlvl,
        course: String(acad),
      })
      .subscribe((prospectus_filter) => {
        this.data = prospectus_filter;
        this.prospectus = this.data[0];
        console.log(this.data);

        this.alreadysubmit();
        // console.log(prospectus_filter);
      });
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

  getyearandsem() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.semesterinfo = res;
      if (this.semesterinfo[0]) {
        this.semester = this.semesterinfo[0][0]['semester'];
        this.activateyr = this.semesterinfo[0][0]['active_year'];
        // this.alreadysubmit();
        // console.log(this.semesterinfo);
      } else {
        // console.log(this.semesterinfo);
      }
    });
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
      .addcollegetrancsaction({
        subjectdata: subjectids,
        studentid: this.acadid,
        acadyr: this.activateyr,
      })
      .subscribe((res) => {
        this.transacnotif = res;
        // console.log(res);
        if (this.transacnotif['message'] === 'success') {
          Swal.fire('Success', 'Subjects submitted', 'success');
          this.getactivateprospectos();
        } else {
          Swal.fire('Success', this.transacnotif['message'], 'success');
        }
      });

    console.log(subjectids);
  }

  getactivateprospectos() {
    console.log(this.studentdata);
    this.college_controller
      .gettransaction(this.studentdata[0]['id'], '1st Trimester')
      .subscribe((res) => {
        // console.log(res);
        this.acadtransac = res;
        // console.log(this.acadtransac[0][0]['id']);
        this.acadid = this.acadtransac[0][0]['id'];
        this.studentProspectus(
          this.acadtransac[0][0]['student_yr_lvl'],
          this.acadtransac[0][0]['course_id']
        );
      });
  }

  alreadysubmit() {
    this.prospectus_get
      .isalreadysubmitted(this.semester, this.acadid)
      .subscribe((res) => {
        this.isalreadyenrolled = res;
        this.alreadysubmitted = this.isalreadyenrolled['message'] === 'new';

        console.log([
          this.isalreadyenrolled['message'],
          this.semester,
          this.acadid,
        ]);
      });
  }
}
