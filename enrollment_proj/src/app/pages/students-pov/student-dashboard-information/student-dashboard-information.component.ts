import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { MessageService } from 'primeng/api';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-student-dashboard-information',
  templateUrl: './student-dashboard-information.component.html',
  styleUrls: ['./student-dashboard-information.component.css'],
})
export class StudentDashboardInformationComponent implements OnInit {
  data: any;
  response: any;
  date: any;
  showToastNotification: boolean = false;

  @ViewChild('canvas') canvasEl!: ElementRef;
  constructor(
    private logincontroller: LoginController,
    private http: HttpClient,
    private college: CollegeService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const res = await this.college.information();
      this.data = res;
      this.date = new Date(this.data.birth_date);
    } catch (error) {
    }
  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

}
