import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-accounting-dashboard-schoolfees',
  templateUrl: './accounting-dashboard-schoolfees.component.html',
  styleUrls: ['./accounting-dashboard-schoolfees.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingDashboardSchoolfeesComponent implements OnInit {
  data: any;
  departments: any;
  deptfeesDialog: boolean = false;
  info: any;
  deptfeesdata: any;
  displaydeptname!: string;
  acadyr: any;
  totalamount!: number;

  constructor(
    private AccountingController: AccountingController,
    private messageService: MessageService
  ) {}

  showmatriFees(id: number, department_name: string) {
    // alert(id);
    this.displaydeptname = department_name;
    this.deptfeesDialog = true;
    this.getDeptFees(id);
  }

  getDeptFees(id: number) {
    this.AccountingController.getfeesdepartment(id).subscribe({
      next: (res) => {
        this.info = res;
        this.deptfeesdata = this.info[0];
        this.acadyr = this.deptfeesdata[0]['acadyr'];
        let total = 0;
        for (let item of this.deptfeesdata) {
          this.totalamount = total += parseFloat(item.amount);
        }
        console.log(this.deptfeesdata);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getdepartments() {
    this.AccountingController.getdepartments().subscribe({
      next: (res) => {
        this.data = res;
        this.departments = this.data[0];
        console.log(this.departments);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.getdepartments();
  }
}
