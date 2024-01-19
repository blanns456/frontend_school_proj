import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SectionController } from 'src/app/controllers/section_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deans-classroom',
  templateUrl: './deans-classroom.component.html',
  styleUrls: ['./deans-classroom.component.css'],
})
export class DeansClassroomComponent implements OnInit {
  sections: any;
  sections2: any;
  sections3: any;
  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];
  data: any;
  info: any;
  addSection: FormGroup;

  addRow1st() {
    this.rows1.push({
      sectioname: '',
      sectype: '',
      yr_lvl: '',
      maxstuds: '',
    });
  }
  addRow2nd() {
    this.rows2.push({
      sectioname: '',
      sectype: '',
      yr_lvl: '',
      maxstuds: '',
    });
  }
  addRow3rd() {
    this.rows3.push({
      sectioname: '',
      sectype: '',
      yr_lvl: '',
      maxstuds: '',
    });
  }
  addRow4th() {
    this.rows4.push({
      sectioname: '',
      sectype: '',
      yr_lvl: '',
      maxstuds: '',
    });
  }

  constructor(private sectionAll: SectionController, private router: Router) {
    this.addSection = new FormGroup({
      sectioname: new FormControl(null, [Validators.required]),
      sectype: new FormControl(null, [Validators.required]),
      yr_lvl: new FormControl(null, [Validators.required]),
      maxstuds: new FormControl(null, [Validators.required]),
    });
  }

  getBSCS() {
    this.sectionAll.getbscs().subscribe((section) => {
      this.data = section;
      this.sections = this.data[0];
      // console.log(section);
    });
  }
  getBSIT() {
    this.sectionAll.getbsit().subscribe((valbsit) => {
      this.data = valbsit;
      this.sections2 = this.data[0];
      // console.log(section2);
    });
  }
  getBSIS() {
    this.sectionAll.getbsis().subscribe((valbsis) => {
      this.data = valbsis;
      this.sections3 = this.data[0];
      // console.log(section3);
    });
  }

  ngOnInit(): void {
    this.getBSCS();
    this.getBSIT();
    this.getBSIS();

    $('document').ready(function () {
      $('#home-tab').change(function () {
        // alert('a');
        $('#sectioname').attr('value', 'New value');
      });
    });
  }

  onSubmitSection() {
    // console.log(this.addSection.value);
    this.sectionAll.createsection(this.addSection.value).subscribe((res) => {
      this.info = res;
      if (this.info[0]['message'] === 'ERROR') {
        if (this.info[0]['error']['sectioname']) {
          Swal.fire('Error', this.info[0]['error']['sectioname'][0], 'error');
        } else if (this.info[0]['error']['sectype']) {
          Swal.fire('Error', this.info[0]['error']['sectype'][0], 'error');
        } else if (this.info[0]['error']['yr_lvl']) {
          Swal.fire('Error', this.info[0]['error']['yr_lvl'][0], 'error');
        } else if (this.info[0]['error']['maxstuds']) {
          Swal.fire('Error', this.info[0]['error']['maxstuds'][0], 'error');
        }
        return;
      } else {
        Swal.fire('Success', 'Added Successfully', 'success').then((e) => {
          window.location.reload();
        });
        return;
      }
    });
  }
}
