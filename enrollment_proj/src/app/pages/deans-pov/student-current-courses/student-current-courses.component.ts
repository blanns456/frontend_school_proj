import { Component } from '@angular/core';

@Component({
  selector: 'app-student-current-courses',
  templateUrl: './student-current-courses.component.html',
  styleUrls: ['./student-current-courses.component.css']
})
export class StudentCurrentCoursesComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
