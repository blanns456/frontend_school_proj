// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// import { Observable } from "rxjs";



@Injectable({providedIn:"root"})
export class CollegeEnrollmentController{



  collegeinfo = {
    "academic_year": "",
    "semester": "",
    "student_status": "",
    "year_level": "",
    "course": "",
    "lastname":"",
    "firstname":"",
    "middlename": "",
    "suffix": "",
    "birthdate":"",
    "religion":"",
    "email_address":"",
    "birth_place":"",
    "citizenship":"",
    "contactnumber":"",
    "gender":"",
    "civilstatus":"",
    "permanentaddress":"",
    "homeaddress": "",
    "elemschool": "",
    "elemyg": "",
    "jhschool": "",
    "jhsyg": "",
    "shschool": "",
    "shsyg": "",
    "parentsOrguradian": "",
    "parentsOccupation": "",
    "parentcontactnumber": "",
    "schoollastattended": "",
    "lastschoolyearattended": "",
    "status": "1",
    "signature":""
   }

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {

  }





  public getcourses() {
    return this.http.get(this.Root_URL + 'courses');
  }

  public createstudent(student: {
    year_level: string,
    course: string,
  }) {
   return this.http.post(this.Root_URL + 'addstudent', student);
  }

}

