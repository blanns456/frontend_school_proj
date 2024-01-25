import { Component, OnInit } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
import { LoginController } from 'src/app/controllers/login_controller.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-prospectus-courses',
  templateUrl: './student-prospectus-courses.component.html',
  styleUrls: ['./student-prospectus-courses.component.css'],
})
export class StudentProspectusCoursesComponent implements OnInit {
  data: any;
  prospectus: any = [];
  groupedProspectus: { [key: string]: any[] } = {};
  totalUnits: number = 0;
  studentdata: any;
  Object: any;
  program: any;
  student: any;
  Acads: any;
  studentAca: any;
  cId: any;

  constructor(
    private prospectus_get: ProspectusController,
    private logincontroller: LoginController,
    private http: HttpClient
  ) {}

  getYearLevels(): string[] {
    return Object.keys(this.groupedProspectus);
  }

  ngOnInit(): void {
    this.studentdata = this.logincontroller.getuserdetails();

    this.studentAca = this.studentdata[0]['id'];

    this.http
      .get(this.logincontroller.Root_URL + 'studentAcad/' + this.studentAca)
      .subscribe((res) => {
        this.data = res;
        this.Acads = this.data[0];
        this.cId = this.data[0][0].cId;

        const getProspectus = {
          course: String(this.cId),
        };

        this.http
          .post(
            this.prospectus_get.Root_URL + 'student-all-prospectus',
            getProspectus
          )
          .subscribe((prospectus_filter) => {
            this.data = prospectus_filter;
            this.prospectus = this.data[0];
            this.program = this.prospectus['course'];
            this.prospectus.forEach((subject: { year_lvl: any }) => {
              const yearLevel = subject.year_lvl;
              if (!this.groupedProspectus[yearLevel]) {
                this.groupedProspectus[yearLevel] = [];
              }
              this.groupedProspectus[yearLevel].push(subject);
            });
          });
      });
  }
}
