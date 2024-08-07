import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';

@Component({
  selector: 'app-maed-prospectus',
  templateUrl: './maed-prospectus.component.html',
  styleUrls: ['./maed-prospectus.component.css']
})
export class MaedProspectusComponent implements OnInit {
  data: any;
  prospectus: any = [];
  groupedProspectus: { [key: string]: any[] } = {};
  program: any;

  constructor(
    private prospectus_get: ProspectusService,
    private cdr: ChangeDetectorRef
  ) { }

  getYearLevels(): string[] {
    return Object.keys(this.groupedProspectus);
  }

  ngOnInit(): void {
    this.prospectus_get.student_all_prospectus().subscribe({
      next: (res) => {
        this.data = res;
        this.prospectus = this.data[0];
        this.program = this.prospectus['course'];
        this.groupProspectus();
        this.cdr.detectChanges();
      },
    });
  }

  groupProspectus(): void {
    this.groupedProspectus = {};
    this.prospectus.forEach((subject: { year_lvl: any }) => {
      const yearLevel = subject.year_lvl;
      if (!this.groupedProspectus[yearLevel]) {
        this.groupedProspectus[yearLevel] = [];
      }
      this.groupedProspectus[yearLevel].push(subject);
    });
  }
}
