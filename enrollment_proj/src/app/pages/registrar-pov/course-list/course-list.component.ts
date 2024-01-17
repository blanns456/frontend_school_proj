import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  addProgram: FormGroup;

  constructor()
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
