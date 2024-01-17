import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];
  courses: any = [];
  data: any;
  info: any;
  addProgram: FormGroup;

  constructor(private prospectus: ProspectusController, private router: Router)
  {
    this.addProgram = new FormGroup({
    program : new FormControl(null, [Validators.required]),
    date_start : new FormControl(null, [Validators.required]),
    date_end : new FormControl(null, [Validators.required]),
    });
  }

  courseGet() {
    this.prospectus.getcourses().subscribe((course) => {
      this.data = course;
      this.courses = this.data[0];
    });
  }

  ngOnInit(): void {
    this.courseGet();
  }

  onSubmitProgram() {
    console.log(this.addProgram.value);
    this.prospectus
      .createProspectus(this.addProgram.value)
      .subscribe((res) => {
        this.info = res;
        if (this.info[0]['message'] === 'ERROR') {
          if (this.info[0]['error']['program']) {
            Swal.fire('Error', this.info[0]['error']['program'][0], 'error');
          } else if (this.info[0]['error']['date_start']) {
            Swal.fire('Error', this.info[0]['error']['date_start'][0], 'error');
          } else if (this.info[0]['error']['date_end']) {
            Swal.fire('Error', this.info[0]['error']['date_end'][0], 'error');
          }
          return;
        } else {
          // this.loadusers();
          Swal.fire('Success', 'Added Successfully', 'success').then((e) => {
            window.location.reload();
          });
          return;
        }
      });
  }

  onSubmitProspectus() {
    
  }

  addRow1st() {
    this.rows1.push({ course_number: '', description: '', units: '', pre_requisite: '' , trimester: '' });
  }
  addRow2nd() {
    this.rows2.push({ course_number: '', description: '', units: '', pre_requisite: '', trimester: '' });
  }
  addRow3rd() {
    this.rows3.push({ course_number: '', description: '', units: '', pre_requisite: '', trimester: '' });
  }
  addRow4th() {
    this.rows4.push({ course_number: '', description: '', units: '', pre_requisite: '', trimester: '' });
  }
}
