import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { ProspectusService } from 'src/app/services/prospectus.service';
import * as $ from 'jquery'; // kini sa pgdeclare nis $

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
    private prospectus_get: ProspectusService,
  ) { }

  getYearLevels(): string[] {
    return Object.keys(this.groupedProspectus);
  }

  ngOnInit(): void {

    this.prospectus_get.student_prospectus().subscribe({
      next: (res) => {
        this.data = res;
        this.prospectus = this.data[0];
        this.program = this.prospectus['course'];
        this.prospectus.forEach((subject: { year_lvl: any }) => {
          const yearLevel = subject.year_lvl;
          if (!this.groupedProspectus[yearLevel]) {
            this.groupedProspectus[yearLevel] = [];
          }
          this.groupedProspectus[yearLevel].push(subject);
        });
      }
    });

  }
}
