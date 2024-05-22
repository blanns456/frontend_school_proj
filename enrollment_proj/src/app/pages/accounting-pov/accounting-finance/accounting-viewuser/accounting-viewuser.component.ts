import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';

@Component({
  selector: 'app-accounting-viewuser',
  templateUrl: './accounting-viewuser.component.html',
  styleUrls: ['./accounting-viewuser.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingViewuserComponent implements OnInit {
  studentData: any;
  rows1: any[] = [];
  dialogVisible: boolean = false;
  updateDialog: boolean = false;
  studid: any;
  data: any;
  subjectmatri: any;
  totalamount!: number;
  totalall!: number;
  departments: any;
  gender: any;
  subLedgerFees: any;
  totalamountfees!: number;
  gettotal!: number;
  seminfo: any;
  activeyr: any;
  info: any;
  labfeedatas: any;
  totallabfees!: number;
  deptid: any;
  showaddtionalFee: boolean = false;
  addsinfo: any;
  addsfeedatas: any;
  totaladditional!: number;
  totalfinalasses!: number;
  studamounts: FormGroup;
  updateFeesform: FormGroup;
  labfeeid: any;
  matrifees_id: any;
  prevbal: any;
  transacinfo: any;
  gettransac: any;
  getprevbal: any;
  getstatusledger: any;
  grandtotal: any;

  constructor(
    private semester_controller: SemesterController,
    private router: Router,
    private AccountingController: AccountingController,
    private messageService: MessageService
  ) {
    this.studentData =
      this.router.getCurrentNavigation()?.extras.state?.['studentData'];
    console.log('Received student data:', this.studentData);

    this.studamounts = new FormGroup({
      studid: new FormControl('', [Validators.required]),
      matrifees_id: new FormControl('', [Validators.required]),
      matrifeetotal: new FormControl('', [Validators.required]),
      labfeetotal: new FormControl('', [Validators.required]),
      totalamount: new FormControl('', [Validators.required]),
      totalTuitionfee: new FormControl('', [Validators.required]),
      prevbalance: new FormControl(0, [Validators.required]),
      totaladdlfees: new FormControl(0, [Validators.required]),
      finalassessment: new FormControl('', [Validators.required]),
      downpayment: new FormControl(0, [Validators.required]),
    });

    this.updateFeesform = new FormGroup({
      prevbal: new FormControl('', [Validators.required]),
      downpayment: new FormControl('', [Validators.required]),
    });
  }

  addRow(item: number) {
    const newRow = {
      additionalitem: '',
      additionalamount: '',
    };

    switch (item) {
      case 1:
        this.rows1.push(newRow);
        break;
      default:
        break;
    }
  }

  saveAdditonal() {
    // console.log(this.additionalFees.value);
    const allrows = [...this.rows1];
    const itemdatas = allrows.map((row) => ({
      studid: this.studid,
      additionalitem: row.additionalitem,
      additionalamount: row.additionalamount,
    }));

    itemdatas.forEach((e) => {
      // console.log(e.studid);
      // console.log(e.additionalitem);
      // console.log(e.additionalamount);
      this.AccountingController.addadditionalfee({
        studid: e.studid,
        itemname: e.additionalitem,
        ditionalAmount: e.additionalamount,
      }).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    });
  }

  showDialog2() {
    this.dialogVisible = true;
  }

  addtionalFeeDialog() {
    this.showaddtionalFee = true;
  }

  showupdateDialog(studid: number) {
    this.updateDialog = true;
    this.updateFees(studid);
  }

  submitledger() {
    // console.log(this.studamounts.value);
    this.AccountingController.addstudledger(this.studamounts.value).subscribe({
      next: (res) => {
        console.log('Success', res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Added Successfully',
        });
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  updateFees(studid: number) {
    // console.log(this.updateFeesform.value);
    this.AccountingController.updateFeesLedger(
      studid,
      this.updateFeesform.value
    ).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getstudlabfees(studid: number) {
    this.AccountingController.getstudlabFees(studid).subscribe({
      next: (res) => {
        this.info = res;
        this.labfeedatas = this.info[0];
        let total = 0;
        for (let item of this.labfeedatas) {
          this.totallabfees = total += parseFloat(item.feeAmount);
        }
        // console.log(this.labfeedatas);
        this.studamounts.get('labfeetotal')?.setValue(this.totallabfees);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  showSubjectmatri(studid: number) {
    this.AccountingController.showSubjectmatri(studid).subscribe({
      next: (response) => {
        this.data = response;
        this.subjectmatri = this.data[0];
        let total = 0;
        for (let item of this.subjectmatri) {
          this.totalamount = total += parseFloat(item.units);
        }
        this.totalall = this.totalamount * 300;
        this.studamounts.get('totalTuitionfee')?.setValue(this.totalall);
        // console.log(this.subjectmatri);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getaddsfee(studid: number) {
    this.AccountingController.getaddsFee(studid).subscribe({
      next: (res) => {
        this.addsinfo = res;
        this.addsfeedatas = this.addsinfo[0];
        let total = 0;
        for (let addsfee of this.addsfeedatas) {
          this.totaladditional = total += parseFloat(addsfee.amount);

          this.studamounts.get('totaladdlfees')?.setValue(this.totaladditional);
        }
        // console.log(this.totalfinalasses);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getstudeptFees(deptid: number) {
    this.AccountingController.getfeesdepartment(deptid).subscribe({
      next: (res) => {
        this.data = res;
        this.subLedgerFees = this.data[0];
        let total = 0;
        for (let item of this.subLedgerFees) {
          this.totalamountfees = total += parseFloat(item.amount);
        }
        // console.log(this.subLedgerFees);
        this.gettotal =
          (this.totalall || 0) +
          (this.totalamountfees || 0) +
          (this.totallabfees || 0);
        this.totalfinalasses = this.gettotal + this.totaladditional || 0;
        this.matrifees_id = this.subLedgerFees[0]['matrifees_id'];

        this.studamounts.get('matrifees_id')?.setValue(this.matrifees_id);
        this.studamounts.get('matrifeetotal')?.setValue(this.totalamountfees);
        this.studamounts.get('totalamount')?.setValue(this.gettotal);
        this.studamounts.get('finalassessment')?.setValue(this.totalfinalasses);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  gettransacinfos(studid: number) {
    this.AccountingController.showtransacs(studid).subscribe({
      next: (res) => {
        this.transacinfo = res;
        this.gettransac = this.transacinfo[0];
        this.getprevbal = this.gettransac['previous_bal'] || 0;
        this.getstatusledger = this.gettransac[0]['status'];
        this.studamounts.get('prevbalance')?.setValue(this.getprevbal);
        // console.log(this.gettransac);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit() {
    this.studid = this.studentData['studid'];
    this.deptid = this.studentData['deptid'];
    this.getstudlabfees(this.studid);
    this.showSubjectmatri(this.studid);
    this.getaddsfee(this.studid);
    this.getstudeptFees(this.deptid);
    this.getactivesem();
    this.gettransacinfos(this.studid);
    this.studamounts.get('studid')?.setValue(this.studid);
  }

  getactivesem() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.seminfo = res;
      this.activeyr = this.seminfo[0][0]['active_year'];
    });
  }

  getYearLevelString(yearLevel: number): string {
    const lastDigit = yearLevel % 10;
    const lastTwoDigits = yearLevel % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${yearLevel}th year`;
    } else {
      switch (lastDigit) {
        case 1:
          return `${yearLevel}st Year`;
        case 2:
          return `${yearLevel}nd Year`;
        case 3:
          return `${yearLevel}rd Year`;
        default:
          return `${yearLevel}th Year`;
      }
    }
  }
}
