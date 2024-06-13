import { Component, OnInit } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { UpdateStudentServiceService } from 'src/app/services/update-student-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prospectus-students',
  templateUrl: './prospectus-students.component.html',
  styleUrls: ['./prospectus-students.component.css'],
})
export class ProspectusStudentsComponent implements OnInit {
  data: any;
  infomation: any;
  prospectusData: any = [];
  totalUnits: number = 0;
  studentdata: any;
  acadtransac: any;
  transacnotif: any;
  acadid: any;
  semesterinfo: any;
  activateyr: any;
  semester: any;
  isalreadyenrolled: any;
  is_already_submitted: any;
  alreadysubmitted: boolean | undefined;
  showToastNotification: boolean = false;


  constructor(
    private prospectus: ProspectusService,
    private router: Router,
    private student: UpdateStudentServiceService,
    private enrollment: EnrollmentService,
  ) { }

  ngOnInit(): void {
    this.prospectus.student_academics().subscribe({
      next: (response) => {
        // console.log(response);
        this.prospectusData = response;
      }
    });

    this.prospectus.student_current_prospectus().subscribe({
      next: (response) => {
        // console.log(responsse);
        this.data = response;
        this.prospectusData = this.data[0];
      }
    });

    this.student.student_information().subscribe({
      next: (response) => {
        // console.log(response);
        this.data = response
        this.infomation = this.data[0];
      }
    });

    this.prospectus.submitted_already().subscribe({
      next: (res) => {
        this.data = res;
        this.is_already_submitted = this.data.message;
        // console.log(this.data.message);
      }
    });
  }

  selectAll(event: any) {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="subjects"]');
    const allChecked = event.target.checked;

    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = allChecked;
      }
    });


    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        const changeEvent = new Event('change');
        checkbox.dispatchEvent(changeEvent);
      }
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
        const checkboxValue = parseFloat(checkbox.value.split(',')[1]);
        return isNaN(checkboxValue) ? sum : sum + checkboxValue;
      }, 0);

    this.checkAllCheckbox();
  }

  onsubmit() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    const subjectids = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked && checkbox.name === 'subjects')
      .map((checkbox) => checkbox.value.split(',')[0]);

    this.student.student_information().subscribe({
      next: (response) => {
        console.log(response);
        this.data = response
        this.infomation = this.data[0];
        if (this.infomation.has_finished === 'false') {
          this.router.navigate(['student/information']);
          Swal.fire('Information!', 'Update Information First', 'info');
        } else {
          this.enrollment
            .college_enrollment({
              subjects: JSON.stringify(subjectids),
            })
            .subscribe((res) => {
              this.transacnotif = res;
              if (this.transacnotif['message'] === 'success') {
                this.router.navigate(['student/enrollment']);
                Swal.fire('Information', "Courses Pending Dean's Approval.", 'info');
              } else {
                Swal.fire('Error', this.transacnotif['message'], 'error');
              }
            });
        }
      }
    });
  }

}
