import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  // private subscription: Subscription;
  addsemester: FormGroup;

  constructor(private semesterAll: SemesterController, private router: Router) {
    this.addsemester = new FormGroup({
      semester: new FormControl(null, [Validators.required]),
      start_date: new FormControl(null, [Validators.required]),
      end_date: new FormControl(null, [Validators.required]),
      status: new FormControl('active', [Validators.required]),
    });
  }

  getsemester() {
    this.semesterAll.getsemester().subscribe((sem) => {
      this.data = sem;
      this.semesters = this.data[0];
      // console.log(sem);
    });
  }

  // getstatus() {
  //   this.semesterAll.getsemester().subscribe((sem) => {
  //     // console.log('success', sem);
  //     this.stats = sem;
  //     console.log(this.stats[0]);
  //     // const t = this.stats.end _date;
  //   });
  // }

  ngOnInit(): void {
    this.getsemester();
    // this.getstatus();
  }

  OnsubmitSemester() {
    // console.log(this.addsemester.value);
    this.semesterAll.createsemester(this.addsemester.value).subscribe((res) => {
      this.info = res;
      if (this.info[0]['message'] === 'ERROR') {
        if (this.info[0]['error']['semester']) {
          Swal.fire('Error', this.info[0]['error']['semester'][0], 'error');
        } else if (this.info[0]['error']['start_date']) {
          Swal.fire('Error', this.info[0]['error']['start_date'][0], 'error');
        } else if (this.info[0]['error']['end_date']) {
          Swal.fire('Error', this.info[0]['error']['end_date'][0], 'error');
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
