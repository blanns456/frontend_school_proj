import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  readonly Root_URL = 'http://127.0.0.1:8000/api/';

  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];
  courses: any = [];
  addProgram: FormGroup;

  courseGet() {
    this.http.get(this.Root_URL + 'courses').subscribe((course) => {
      console.log(course);
    });
  }

  constructor(private http: HttpClient)
  {
    this.addProgram = new FormGroup({
    program : new FormControl(null, [Validators.required]),
    });
  }

  onSubmitProgram() {
    
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
