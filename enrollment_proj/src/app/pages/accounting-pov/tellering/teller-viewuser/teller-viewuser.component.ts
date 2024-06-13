import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { error } from 'jquery';
import { MessageService } from 'primeng/api';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';

@Component({
  selector: 'app-teller-viewuser',
  templateUrl: './teller-viewuser.component.html',
  styleUrls: ['./teller-viewuser.component.css'],
  providers: [MessageService],
})
export class TellerViewuserComponent implements OnInit {
  studentLedg: any;
  data: any;
  showledgerfees: any;
  labfeedatas: any;
  labdata: any;
  payHistoryDialog: boolean = false;
  showMakePaymentDIalog: boolean = false;
  allocateTable: boolean = false;
  showbreakdownDialog: boolean = false;
  displayname!: string;
  randomNumber: number;
  studTransac: FormGroup;
  students = [
    {
      name: 'John Doe',
      mop: 'Cash',
      date: '05/12/2024',
      status: 'PAID',
    },
  ];
  feetype = [
    { name: 'Registration Fees' },
    { name: 'Tuition Fees' },
    { name: 'Lab Fees' },
  ];
  seminfo: any;
  activeyr: any;
  activesem: any;
  sem_id: any;
  transacinfo: any;
  studentTranac: any;
  selectedItemFees: any[] = [];
  allocation: any;
  allodata: any;
  breakinfo: any;
  feesbreakdown: any;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private semester_controller: SemesterController,
    private AccountingController: AccountingController
  ) {
    this.studentLedg =
      this.router.getCurrentNavigation()?.extras.state?.['studentLedg'];
    console.log('Received student data:', this.studentLedg);
    this.randomNumber = Math.floor(1000000 + Math.random() * 9000000);

    const studid = this.studentLedg['stud_id'];
    const studledgerId = this.studentLedg['id'];
    this.getstudledger(studid);
    this.getstudlabfee(studid);

    this.studTransac = new FormGroup({
      student_id: new FormControl('', [Validators.required]),
      studledgerId: new FormControl('', [Validators.required]),
      mop: new FormControl('', [Validators.required]),
      receiptNo: new FormControl('', [Validators.required]),
      sem_id: new FormControl('', [Validators.required]),
      teller: new FormControl('', [Validators.required]),
      afterBal: new FormControl(0, [Validators.required]),
      paidAmount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });

    this.studTransac.get('receiptNo')?.setValue(this.randomNumber);
    this.studTransac.get('student_id')?.setValue(studid);
    this.studTransac.get('studledgerId')?.setValue(studledgerId);
  }

  showmakePayment() {
    this.showMakePaymentDIalog = true;
  }

  showallocateFees() {
    this.allocateTable = true;
    const paidAmountValue = this.studTransac.value;
    this.AccountingController.allocateFees(paidAmountValue).subscribe({
      next: (res) => {
        this.allodata = res;
        this.allocation = this.allodata[0];
        // console.log(this.allocation);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  saveStudTransac() {
    // console.log(this.studTransac.value);
    this.AccountingController.addstudtransac(this.studTransac.value).subscribe({
      next: (res) => {
        console.log(res);
        this.saveallocatedfees();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Enjoy!',
        });
        setTimeout(() => {
          window.location.reload;
        }, 4000);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  saveallocatedfees() {
    const formData = {
      studledgerId: this.studTransac.get('studledgerId')?.value,
      allocatedFees: this.allocation,
    };

    this.AccountingController.saveallocatedfees(formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  showpayHistory(studname: string, stud_id: number) {
    this.displayname = studname;
    this.payHistoryDialog = true;
    this.getstudTransac(stud_id);
  }

  showfees(studledger_id: number) {
    this.showbreakdownDialog = true;
    // alert(studledger_id);
    this.getfeebreakds(studledger_id);
  }

  getfeebreakds(studledger_id: number) {
    this.AccountingController.getfeebreakds(studledger_id).subscribe({
      next: (res) => {
        this.breakinfo = res;
        this.feesbreakdown = this.breakinfo[0];
        // console.log(this.feesbreakdown);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getstudTransac(stud_id: number) {
    this.AccountingController.getstudentTransac(stud_id).subscribe({
      next: (res) => {
        this.transacinfo = res;
        this.studentTranac = this.transacinfo[0];
        // console.log(this.studentTranac);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getstudledger(studid: number) {
    this.AccountingController.getstudledger(studid).subscribe({
      next: (res) => {
        this.data = res;
        this.showledgerfees = this.data[0];
        console.log(this.showledgerfees);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getstudlabfee(studid: number) {
    this.AccountingController.getstudlabFees(studid).subscribe({
      next: (res) => {
        this.labdata = res;
        this.labfeedatas = this.labdata[0];
        // console.log(this.labfeedatas);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    // console.log(this.studentLedg['stud_id']);
    this.getactivesem();
  }

  getactivesem() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.seminfo = res;
      this.sem_id = this.seminfo[0][0]['id'];
      this.activeyr = this.seminfo[0][0]['active_year'];
      this.activesem = this.seminfo[0][0]['semester'];
      this.studTransac.get('sem_id')?.setValue(this.sem_id);
    });
  }
}
