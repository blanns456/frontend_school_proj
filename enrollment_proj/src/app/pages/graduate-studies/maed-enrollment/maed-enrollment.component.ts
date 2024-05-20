import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-maed-enrollment',
  templateUrl: './maed-enrollment.component.html',
  styleUrls: ['./maed-enrollment.component.css']
})
export class MaedEnrollmentComponent implements OnInit {
  data: any;
  enrollments: any;
  studentdata: any;
  studname: string | undefined;
  semester: any;

  constructor(
    private enrollment: EnrollmentService,
  ) { }

  ngOnInit(): void {
    this.enrollment.my_enrollment().subscribe({
      next: (response) => {
        // console.log(response);
        this.data = response;
        this.enrollments = this.data.data;
        this.semester = this.data.semester;
        // console.log(this.data.semester);
      }
    });
  }
}
