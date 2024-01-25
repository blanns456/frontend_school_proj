import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
  students: any = [];
  rows1: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];
  rows4: any[] = [];

  rows5: any[] = [];
  rows6: any[] = [];
  rows7: any[] = [];
  rows8: any[] = [];
  // programs: any[] = [];
  // selectedProgram: any;
  data: any;
  info: any;
  addSection: FormGroup;
  addstudentsection: FormGroup;
  alertShown = false;

  filterObj = {
    name: '',
    sort: 'desc',
    perPage: 10,
    page: 1,
  };

  constructor(private sectionAll: SectionController, private router: Router) {
    // this.addstudentsection = new FormGroup({
    //   addstudes: new FormControl(null, [Validators.required]),
    // });

    this.addstudentsection = new FormGroup({
      students: new FormArray([]),
    });

    this.addSection = new FormGroup({
      section: new FormArray([]),
    });
  }

  filtersection() {
    // this.http
    //   .post(this.section_get.Root_URL + 'getsection', this.filterObj)
    //   .subscribe((section_filter: any) => {
    //     this.data = section_filter;
    //     this.section = this.data.data;
    //     this.total = this.data.total;
    //     this.totalPage = this.data.lastPage;
    //     console.log(this.section);
    //   });
  }

  getsection() {
    this.sectionAll.getsection().subscribe((section) => {
      this.data = section;
      this.sections = this.data[0];
      // console.log(section);
    });
  }

  getstudes() {
    this.sectionAll.getstuds().subscribe((studs) => {
      this.data = studs;
      this.students = this.data[0];
      // console.log(section);
    });
  }

  // getProgram() {
  //   this.sectionAll.getprogram().subscribe((prog) => {
  //     this.data = prog;
  //     this.programs = this.data[0];
  //     console.log(prog);
  //   });
  // }

  ngOnInit(): void {
    this.getsection();
    this.getstudes();
    // this.getProgram();
  }

  onclickdata(
    name: string,
    section_type: string,
    year_level: string,
    max_students: string
  ) {
    // alert([ name + '' + section_type, year_level, max_students]);
    $('#section').html(name + ' - ' + section_type);
    $('#yearlvl').html(year_level);
    $('#maxstuds').html(max_students);
  }

  addRow(year: number) {
    const newRow = {
      sectioname: '',
      sectype: '',
      yr_lvl: '',
      maxstuds: 40,
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

  addRowStuds(studs: number) {
    const newRows = {
      addstudes: '',
    };

    switch (studs) {
      case 5:
        this.rows5.push(newRows);
        break;
      case 6:
        this.rows6.push(newRows);
        break;
      case 7:
        this.rows7.push(newRows);
        break;
      case 8:
        this.rows8.push(newRows);
        break;
      default:
        break;
    }
  }

  onSubmitSection() {
    const allRows = [
      ...this.rows1,
      ...this.rows2,
      ...this.rows3,
      ...this.rows4,
    ];
    const rowsWithYear = allRows.map((row) => ({
      ...row,
    }));

    console.log('Data to be sent:', rowsWithYear); // Log the data
    rowsWithYear.forEach((e) => {
      console.log(e.sectioname);
      console.log(e.sectype);
      console.log(e.yr_lvl);
      console.log(e.maxstuds);
      // this.sectionAll
      //   .createsection({
      //     sectioname: e.sectioname,
      //     sectype: e.sectype,
      //     yr_lvl: e.yr_lvl,
      //     maxstuds: e.maxstuds,
      //   })
      //   .subscribe((res) => {
      //     console.log(res);
      //     this.info = res;
      //     if (this.info[0]['message'] === 'ERROR') {
      //       if (this.info[0]['error']['sectioname']) {
      //         Swal.fire(
      //           'ERROR',
      //           this.info[0]['error']['sectioname'][0],
      //           'error'
      //         );
      //       } else if (this.info[0]['error']['sectype']) {
      //         Swal.fire('ERROR', this.info[0]['error']['sectype'][0], 'error');
      //       } else if (this.info[0]['error']['yr_lvl']) {
      //         Swal.fire('ERROR', this.info[0]['error']['yr_lvl'][0], 'error');
      //       } else if (this.info[0]['error']['maxstuds']) {
      //         Swal.fire('ERROR', this.info[0]['error']['maxstuds'][0], 'error');
      //       }
      //       return;
      //     } else {
      //       if (!this.alertShown) {
      //         Swal.fire('Success', 'Added Successfully', 'success').then(
      //           (e) => {
      //             window.location.reload();
      //           }
      //         );
      //         this.alertShown = true;
      //       }
      //       return;
      //     }
      //   });
    });
  }

  addStudentSection() {
    // console.log(this.addstudentsection.value);
    const allRows = [
      ...this.rows5,
      ...this.rows6,
      ...this.rows7,
      ...this.rows8,
    ];
    const rowstudents = allRows.map((row) => ({
      ...row,
    }));

    console.log('Data to be sent:', rowstudents); // Log the data
    rowstudents.forEach((e) => {
      // console.log(e.addstudes);
    });
  }
}
