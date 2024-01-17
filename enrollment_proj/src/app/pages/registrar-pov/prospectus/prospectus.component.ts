import { Component } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.css']
})
export class ProspectusComponent {

  constructor(private prospectus: ProspectusController, private http: HttpClient)
  { }

  students: any = [];
  total: any;
  data: any;
  totalPage: any;
  currentStudents: any;

  filterObj = {
    'name': "",
    'sort': "asc",
    'perPage': 10,
    'page': 1,
  };
  
  ngOnInit(): void {
    this.filterEnrolled();
  }

  onPrevious(){
    this.filterObj.perPage --;
    this.filterEnrolled();
  }

  onNext(){
    this.filterObj.perPage++; 
    this.filterEnrolled();
  }

  filterEnrolled() {
    this.http.post(this.prospectus.Root_URL+'get-prospectus', this.filterObj).subscribe((prospectus) => {
      this.data = prospectus;
      this.students = this.data.data;
      this.total = this.data.total;
      this.totalPage = this.data.lastPage;
      console.log(this.data.page);
    });
  }

}
