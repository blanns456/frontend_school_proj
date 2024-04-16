import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';

@Component({
  selector: 'app-student-dashboard-information',
  templateUrl: './student-dashboard-information.component.html',
  styleUrls: ['./student-dashboard-information.component.css'],
})
export class StudentDashboardInformationComponent implements OnInit {
  data: any;
  date: any;

  @ViewChild('canvas') canvasEl!: ElementRef;
  constructor(
    private logincontroller: LoginController,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.http.get(this.logincontroller.Root_URL + 'info-student', { headers: headers })
      .subscribe({
        next: (res: any) => {
          this.data = res[0][0];
          this.date = new Date(this.data.birthdate);

        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });

  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

}
