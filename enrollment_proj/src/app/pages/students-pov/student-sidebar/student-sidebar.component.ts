import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css'],
})
export class StudentSidebarComponent implements OnInit {
  userdata: any;
  loaddetails = false;
  studentdata: any;
  studentAcads: any;
  student: any;
  userId: any;
  Acads: any;
  data: any;
  studname: string | undefined;
  courseLabels: { [key: string]: string } = {};
  courseAcronym: any;
  constructor(
    private logincontroller: LoginController,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const courseLabels: { [key: string]: string } = {
      'bachelor of elementary education': 'BEED',
      'bachelor of secondary education major in social studies': 'BSED-SS',
      'bachelor of secondary education major in math': 'BSED-Math',
      'bachelor of secondary education major in english': 'BSED-Eng',
      'bachelor of science in business administration major in human resource development management': 'BSBA-HRDM',
      'bachelor of science in business administration major in financial management': 'BSBA-FM',
      'bachelor of science in business administration major in marketing management': 'BSBA-MM',
      'bachelor of science in computer science': 'BSCS',
      'bachelor of science in accountancy': 'BSA',
      'bachelor of science in information technology': 'BSIT',
      'bachelor of science in information systems': 'BSIS',
      'bachelor of science in criminology': 'BSCrim',
      '2-yr. hotel and restaurant management': 'HRM'
    };

    this.http.get(this.logincontroller.Root_URL + 'showstudentdetails', { headers: headers })
      .subscribe({
        next: (res: any) => {
          const studentDetails = res[0];
          const normalizedCourseName = studentDetails.name.trim().toLowerCase();
          this.courseAcronym = courseLabels[normalizedCourseName] || studentDetails.name;
          studentDetails.yearLevelLabel = studentDetails.year_lvl ? studentDetails.year_lvl + this.getYearLabel(studentDetails.year_lvl) : '';
          this.data = studentDetails;
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
  }

  getYearLabel(yearLevel: string): string {
    switch (yearLevel) {
      case '1':
        return 'st Year';
      case '2':
        return 'nd Year';
      case '3':
        return 'rd Year';
      case '4':
        return 'th Year';
      default:
        return '';
    }
  }

  logout() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    localStorage.removeItem('token');

    this.http.get(this.logincontroller.Root_URL + 'logout', { headers: headers })
      .subscribe({
        next: (res: any) => {
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
  }
}
