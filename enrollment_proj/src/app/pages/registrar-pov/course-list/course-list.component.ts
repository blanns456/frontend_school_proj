import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { concat } from 'rxjs/operators';
declare var $: any;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];
  courses: any = [];
  data: any;
  info: any;
  addProgram: FormGroup;
  addSubj: FormGroup;
  prosdata: any;
  alertShown = false;

  constructor(
    private prospectus: ProspectusController,
    private http: HttpClient
  ) {
    this.addProgram = new FormGroup({
      program: new FormControl(null, [Validators.required]),
      date_start: new FormControl(null, [Validators.required]),
      date_end: new FormControl(null, [Validators.required]),
    });

    this.addSubj = new FormGroup({
      subjects: new FormArray([]),
    });
  }

  courseGet() {
    this.prospectus.getcourses().subscribe((course) => {
      this.data = course;
      this.courses = this.data[0];
    });
  }

  ngOnInit(): void {
    this.courseGet();
    this.prosdata = this.prospectus.procpectusdata;
    console.log(this.prospectus.procpectusdata);
  }

  onSubmitProgram() {
    console.log(this.addProgram.value);
    this.prospectus.createProspectus(this.addProgram.value).subscribe((res) => {
      this.info = res;
      if (this.info[0]['message'] === 'ERROR') {
        if (this.info[0]['error']['program']) {
          Swal.fire('Error', this.info[0]['error']['program'][0], 'error');
        } else if (this.info[0]['error']['date_start']) {
          Swal.fire('Error', this.info[0]['error']['date_start'][0], 'error');
        } else if (this.info[0]['error']['date_end']) {
          Swal.fire('Error', this.info[0]['error']['date_end'][0], 'error');
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

  onSubmitProspectus() {}

  addRow(year: number) {
    const newRow = {
      code: '',
      description: '',
      units: '',
      pre_requisite: '',
      trimester: '',
      year_lvl: year,
    };

    switch (year) {
      case 1:
        this.rows1.push(newRow);
        break;
      case 2:
        this.rows2.push(newRow);
        break;
      case 3:
        this.rows3.push(newRow);
        break;
      case 4:
        this.rows4.push(newRow);
        break;
      default:
        break;
    }
  }

  saveData() {
    // console.log($('#prospecid').val());
    const allRows = [
      ...this.rows1,
      ...this.rows2,
      ...this.rows3,
      ...this.rows4,
    ];
    const rowsWithYear = allRows.map((row) => ({
      ...row,
      year_lvl: row.year_lvl,
      prospectus_id: $('#prospecid').val(),
    }));

    console.log('Data to be sent:', rowsWithYear); // Log the data

    rowsWithYear.forEach((e) => {
      // console.log(e.units);
      this.prospectus
        .addsubjects({
          description: e.description,
          prospectus_id: e.prospectus_id + '',
          code: e.code,
          units: e.units,
          pre_requisite: e.pre_requisite,
          year_lvl: e.year_lvl + '',
          semester: e.trimester,
        })
        .subscribe((res) => {
          console.log(res);
          this.info = res;
          if (this.info[0]['message'] === 'ERROR') {
            if (this.info[0]['error']['description']) {
              Swal.fire(
                'ERROR',
                this.info[0]['error']['description'][0],
                'error'
              );
            } else if (this.info[0]['error']['prospectus_id']) {
              Swal.fire(
                'ERROR',
                this.info[0]['error']['prospectus_id'][0],
                'error'
              );
            } else if (this.info[0]['error']['code']) {
              Swal.fire('ERROR', this.info[0]['error']['code'][0], 'error');
            } else if (this.info[0]['error']['units']) {
              Swal.fire('ERROR', this.info[0]['error']['units'][0], 'error');
            } else if (this.info[0]['error']['pre_requisite']) {
              Swal.fire(
                'ERROR',
                this.info[0]['error']['pre_requisite'][0],
                'error'
              );
            } else if (this.info[0]['error']['year_lvl']) {
              Swal.fire('ERROR', this.info[0]['error']['year_lvl'][0], 'error');
            } else if (this.info[0]['error']['semester']) {
              Swal.fire('ERROR', this.info[0]['error']['semester'][0], 'error');
            }
            return;
          } else {
            if (!this.alertShown) {
              Swal.fire('Success', 'Added Successfully', 'success').then(
                (e) => {
                  window.location.reload();
                }
              );
              this.alertShown = true;
            }
            return;
          }
        });
    });
  }
}
