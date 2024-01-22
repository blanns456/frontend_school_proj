import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css'],
})
export class AddSemesterComponent implements OnInit {
  semesters: any;
  stats: any;
  data: any;
  info: any;
  addsemester: FormGroup;

  constructor(private semesterAll: SemesterController, private router: Router) {
    this.addsemester = new FormGroup({
      semester: new FormControl(null, [Validators.required]),
      active_year: new FormControl(null, [Validators.required]),
      status: new FormControl('active', [Validators.required]),
      enrollment_start: new FormControl(null, [Validators.required]),
      enrollment_end: new FormControl(null, [Validators.required]),
    });
  }

  getsemester() {
    this.semesterAll.getsemester().subscribe((sem) => {
      this.data = sem;
      this.semesters = this.data[0];
      // console.log(sem);
    });
  }

  ngOnInit(): void {
    this.getsemester();
  }

  OnsubmitSemester() {
    // console.log(this.addsemester.value);
    this.semesterAll.createsemester(this.addsemester.value).subscribe((res) => {
      this.info = res;
      if (this.info[0]['message'] === 'ERROR') {
        if (this.info[0]['error']['semester']) {
          Swal.fire('Error', this.info[0]['error']['semester'][0], 'error');
        } else if (this.info[0]['error']['active_year']) {
          Swal.fire('Error', this.info[0]['error']['active_year'][0], 'error');
        } else if (this.info[0]['error']['enrollment_start']) {
          Swal.fire(
            'Error',
            this.info[0]['error']['enrollment_start'][0],
            'error'
          );
        } else if (this.info[0]['error']['enrollment_end']) {
          Swal.fire(
            'Error',
            this.info[0]['error']['enrollment_end'][0],
            'error'
          );
        }
        return;
      } else {
        Swal.fire('Success', 'Added Successfully', 'success').then((e) => {
          window.location.reload();
        });
        return;
      }
    });
  }
}
