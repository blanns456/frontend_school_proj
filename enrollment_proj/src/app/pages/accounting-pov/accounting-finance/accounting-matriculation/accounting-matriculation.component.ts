import { Component, OnInit } from '@angular/core';
import DataTable from 'datatables.net-dt';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-accounting-matriculation',
  templateUrl: './accounting-matriculation.component.html',
  styleUrls: ['./accounting-matriculation.component.css'],
})
export class AccountingMatriculationComponent implements OnInit {
  selectedData = [
    { name: 'Department', code: 'NY' },
    { name: 'Semester', code: 'RM' },
    { name: 'Course', code: 'LDN' },
    { name: 'Year Level', code: 'IST' },
  ];

  dataTable: any;
  students: any;
  data: any;

  constructor(
    private AccountingController: AccountingController,
    private router: Router
  ) {}

  viewUser(student: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        studentData: student,
      },
    };
    this.router.navigate(
      ['/accounting-matriculation-viewuser'],
      navigationExtras
    );
  }

  ngOnInit(): void {
    this.AccountingController.getstudents().subscribe((res) => {
      this.data = res;
      this.students = this.data[0];
      // console.log(this.students);
    });
  }
}
