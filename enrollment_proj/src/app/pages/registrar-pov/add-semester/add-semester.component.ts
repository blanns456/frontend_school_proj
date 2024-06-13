import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import { TrimesterService } from 'src/app/services/trimester.service';
import Swal from 'sweetalert2';

interface Trimester {
  name: string;
  // code: string;
}

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
  trimester: Trimester[] | undefined;


  constructor(private semesterAll: SemesterController, private router: Router, private formBuilder: FormBuilder, private trimesterService:TrimesterService) {
    this.addsemester = new FormGroup({
      trimester: new FormControl(null, [Validators.required]),
      range_of_trimester: new FormControl(null, [Validators.required]),
      academic_year: new FormControl(null, [Validators.required]),
      enrollment: new FormControl(null, [Validators.required]),
    });
  }

  add_trimester: FormGroup = this.formBuilder.group({
    trimester: new FormControl(null, [Validators.required]),
    range_of_trimester: new FormControl(null, [Validators.required]),
    academic_year: new FormControl(null, [Validators.required]),
    enrollment: new FormControl(null, [Validators.required]),
  });

  submit_trimester() {
    const trimester = this.add_trimester.value;
    const academic_year1 = trimester.academic_year[0];
    const academic_year2 = trimester.academic_year[1];
    const enrollment_start = trimester.enrollment[0];
    const enrollment_end = trimester.enrollment[1];
    const trimester_start = trimester.range_of_trimester[0];
    const trimester_end = trimester.range_of_trimester[1];

    console.log(enrollment_end);

    if (this.add_trimester.valid) {
      this.trimesterService.add_trimester(trimester.trimester.name,academic_year1,academic_year2,enrollment_start,enrollment_end,trimester_start,trimester_end).subscribe({
        next: (response) => {
          console.log('Request successful:', response);
          this.add_trimester.reset();
        }
        // error: (err) => {
        //   console.error('Request failed:', err);
        // }
      });
    } else {
    }
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
    this.trimester = [
    { name: '1st Trimester'},
    { name: '2nd Trimester' },
    { name: '3rd Trimester'},
    ];
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
