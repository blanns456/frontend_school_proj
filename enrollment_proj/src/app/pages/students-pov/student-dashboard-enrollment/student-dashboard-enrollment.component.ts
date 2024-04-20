import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-dashboard-enrollment',
  templateUrl: './student-dashboard-enrollment.component.html',
  styleUrls: ['./student-dashboard-enrollment.component.css'],
})
export class StudentDashboardEnrollmentComponent implements OnInit {
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
        console.log(response);
        this.data = response;
        this.enrollments = this.data.data;
        this.semester = this.data.semester;
        console.log(this.data.semester);
      }
    });
  }
}
