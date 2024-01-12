import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-officially-enrolled',
  templateUrl: './officially-enrolled.component.html',
  styleUrls: ['./officially-enrolled.component.css']
})
export class OfficiallyEnrolledComponent implements OnInit, AfterViewInit {

  readonly Root_URL = 'http://127.0.0.1:8000/api/'
  
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

  constructor(private http: HttpClient) {}
  
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
    this.http.post(this.Root_URL + 'get-students',this.filterObj).subscribe((enrolled_students) => {
      this.data = enrolled_students;
      this.students = this.data.data;
      this.total = this.data.total;
      this.totalPage = this.data.lastPage;
      // console.log(this.data.page);

    });
  }

  ngAfterViewInit(): void {
  }

}
