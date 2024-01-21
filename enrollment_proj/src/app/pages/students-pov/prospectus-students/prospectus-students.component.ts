import { Component, OnInit } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prospectus-students',
  templateUrl: './prospectus-students.component.html',
  styleUrls: ['./prospectus-students.component.css'],
})
export class ProspectusStudentsComponent implements OnInit {
  data: any;
  prospectus: any = [];
  totalUnits: number = 0;

  constructor(
    private prospectus_get: ProspectusController,
    private http: HttpClient
  ) {}

  getProspectus = {
    course: '5',
    year_lvl: '3',
  };

  studentProspectus() {
    this.http
      .post(
        this.prospectus_get.Root_URL + 'student-prospectus',
        this.getProspectus
      )
      .subscribe((prospectus_filter) => {
        this.data = prospectus_filter;
        this.prospectus = this.data[0];
        // console.log(this.prospectus);
      });
  }

  ngOnInit(): void {
    this.studentProspectus();
  }

  selectAll(event: any) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = event.target.checked;
    });

    this.calculateTotalUnits();
  }

  updateTotalUnits(event: any, units: string) {
    this.calculateTotalUnits();
    this.checkAllCheckbox();
  }

  checkAllCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allCheckbox = document.getElementById(
      'allButton'
    ) as HTMLInputElement;

    const allChecked = Array.from(checkboxes).every(
      (checkbox) => (checkbox as HTMLInputElement).checked
    );

    allCheckbox.checked = allChecked;
  }

  calculateTotalUnits() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]'
    );

    this.totalUnits = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .reduce((sum, checkbox) => {
        const checkboxValue = parseFloat(checkbox.value);
        return isNaN(checkboxValue) ? sum : sum + checkboxValue;
      }, 0);

    this.checkAllCheckbox();
  }
}
