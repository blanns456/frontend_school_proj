import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { concat } from 'rxjs/operators';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
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

  constructor(private prospectus: ProspectusController, private http: HttpClient)
  {
    this.addProgram = new FormGroup({
    program : new FormControl(null, [Validators.required]),
    date_start : new FormControl(null, [Validators.required]),
    date_end : new FormControl(null, [Validators.required]),
    });

    this.addSubj = new FormGroup({
      subjects : new FormArray([]),
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
  }

  onSubmitProgram() {
    console.log(this.addProgram.value);
    this.prospectus
      .createProspectus(this.addProgram.value)
      .subscribe((res) => {
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

  onSubmitProspectus() {
    
  }

  addRow(year: number) {
    const newRow = {
      code: '',
      description: '',
      pre_requisite: '',
      units: '',
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
    const allRows = [...this.rows1, ...this.rows2, ...this.rows3, ...this.rows4];
    const rowsWithYear = allRows.map(row => ({ ...row, year_lvl: row.year_lvl, prospectus_id: 1 }));
    
    console.log('Data to be sent:', rowsWithYear);  // Log the data

    // rowsWithYear.forEach(e => console.log(e));


    // this.http.post(this.prospectus.Root_URL + 'add-subject', rowsWithYear)
    //   .subscribe(
    //     (response) => {
    //       console.log('Backend response:', response);  // Log the backend response
    //       Swal.fire('Success', 'Added Successfully', 'success').then(() => {
    //         window.location.reload();
    //       });
    //     },
    //     error => {
    //       console.error('Error sending data to backend:', error);  // Log any errors
    //       Swal.fire('Error', 'Failed to add subjects', 'error');
    //     }
    // );
    // console.log(this.addSubj.value);
  }

}
