import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting-viewuser',
  templateUrl: './accounting-viewuser.component.html',
  styleUrls: ['./accounting-viewuser.component.css'],
})
export class AccountingViewuserComponent implements OnInit {
  studentData: any;
  dialogVisible: boolean = false;

  constructor(private router: Router) {
    this.studentData =
      this.router.getCurrentNavigation()?.extras.state?.['studentData'];
    console.log('Received student data:', this.studentData);
  }

  showDialog2() {
    this.dialogVisible = true;
  }

  ngOnInit() {}
}
