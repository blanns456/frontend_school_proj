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
  enrollments: any[] = [];
  semester: any[] = [];

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.enrollmentService.my_enrollment().subscribe({
      next: (response: any) => {
        this.enrollments = response.data; // Assuming response.data contains enrollment data array
        this.semester = response.semester; // Assuming response.semester contains semester data array
      },
      error: (error) => {
        console.error('Error fetching enrollment data:', error);
      }
    });
  }
}
