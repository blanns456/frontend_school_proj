import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];

  constructor(private formbuilder: FormBuilder)
  {}

  addProgram = this.formbuilder.group({
    program: '',
    date_start: '',
    date_end:''
  });

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
