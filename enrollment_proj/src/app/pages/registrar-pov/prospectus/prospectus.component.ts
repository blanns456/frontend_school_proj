import { Component } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.css'],
})
export class ProspectusComponent {
  constructor(
    private prospectus_get: ProspectusController,
    private http: HttpClient
  ) {}

  prospectus: any = [];
  total: any;
  data: any;
  totalPage: any;
  currentStudents: any;

  filterObj = {
    name: '',
    sort: 'desc',
    perPage: 10,
    page: 1,
  };

  ngOnInit(): void {
    this.filterProspectus();
  }

  onPrevious() {
    this.filterObj.perPage--;
    this.filterProspectus();
  }

  onNext() {
    this.filterObj.perPage++;
    this.filterProspectus();
  }

  filterProspectus() {
    this.http
      .post(this.prospectus_get.Root_URL + 'get-prospectus', this.filterObj)
      .subscribe((prospectus_filter) => {
        this.data = prospectus_filter;
        this.prospectus = this.data.data;
        this.total = this.data.total;
        this.totalPage = this.data.lastPage;
        console.log(this.prospectus);
      });
  }

  generatePageNumbers(): number[] {
    return Array.from({ length: this.totalPage }, (_, index) => index + 1);
  }

  goToPage(pageNum: number): void {
    if (
      pageNum >= 1 &&
      pageNum <= this.totalPage &&
      pageNum !== this.filterObj.page
    ) {
      this.filterObj.page = pageNum;
      this.filterProspectus();
    }
  }

  onclickdata(
    prosid: string,
    course: string,
    departmentname: string,
    datestart: string,
    dateend: string
  ) {
    // alert([prosid, course, datestart, dateend]);
    // var pros = {
    //   id: prosid,
    //   course: course,
    //   activedate: datestart + ' - ' + dateend,
    // };

    $('#programs').html(course);
    $('#deptname').html(departmentname);
    $('#prospecid').val(prosid);
    $('#effectyear').html(this.dateformater(datestart, dateend));
    // console.log(this.dateformater(datestart, dateend));
    // this.prospectus_get.procpectusdata = pros;
  }

  private dateformater(startdate: string, enddate: string) {
    var startyear = startdate.split('-')[0];
    var endyear = enddate.split('-')[0];

    if (startyear == endyear) {
      return startyear;
    } else {
      return startyear + ' - ' + endyear;
    }
  }
}
