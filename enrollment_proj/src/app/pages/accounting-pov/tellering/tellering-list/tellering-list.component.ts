import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router, NavigationExtras } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountingService } from 'src/app/services/accounting.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tellering-list',
  templateUrl: './tellering-list.component.html',
  styleUrls: ['./tellering-list.component.css'],
})
export class TelleringListComponent implements OnInit {
  info: any;
  studledgers: any;
  dialogVisible: boolean = false;
  showMakePaymentDIalog: boolean = false;
  allocateTable: boolean = false;
  displayInput: boolean = false;
  allodata: any;
  allocation: any;
  studTransac: FormGroup;
  randomNumber: number;
  teller: any;
  tellerdata: any;
  acknowledgeNo: any;
  studStatus: any;
  currdate: string | null;
  semester_id: any;
  studid: any;
  getmopdata: any;
  data: any;
  tellerid: any;
  studentName!: string;

  constructor(
    private AccountingController: AccountingController,
    private messageService: MessageService,
    private router: Router,
    private AccountingService: AccountingService,
    private datePipe: DatePipe
  ) {
    this.randomNumber = Math.floor(1000000 + Math.random() * 9000000);

    this.studTransac = new FormGroup({
      student_id: new FormControl('', [Validators.required]),
      mop: new FormControl('', [Validators.required]),
      acknowledgeNo: new FormControl('', [Validators.required]),
      paydate: new FormControl('', [Validators.required]),
      sem_id: new FormControl('', [Validators.required]),
      teller: new FormControl('', [Validators.required]),
      paidAmount: new FormControl('', [Validators.required]),
      onlinepayRef: new FormControl('', [Validators.required]),
      itemfeeId: new FormControl('', [Validators.required]),
      tellerId: new FormControl('', [Validators.required]),
    });

    this.currdate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.studTransac.get('paydate')?.setValue(this.currdate);
    // console.log(this.currdate);
  }

  viewTransac(stud: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        studentLedg: stud,
      },
    };
    this.router.navigate(['/teller-viewuser'], navigationExtras);
  }

  onDropdownChange() {
    this.displayInput = true;
  }

  showdialog(studid: number, studname: string, semester: string) {
    const studentid = studid;
    const sem_id = semester;
    this.studentName = studname;
    this.showMakePaymentDIalog = true;
    this.tellerTransacForm();
    this.studTransac.get('student_id')?.setValue(studentid);
    this.studTransac.get('sem_id')?.setValue(sem_id);
  }

  saveTransac() {
    const saveData = {
      allocation: this.allocation,
      formData: this.studTransac.value,
    };
    console.log(saveData);
    // this.AccountingService.submitTransaction(this.studTransac.value).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: 'Added Successfully!',
    //     });
    //     setTimeout(() => {
    //       this.showMakePaymentDIalog = false;
    //       this.studTransac.reset({
    //         mop: this.getmopdata.find(
    //           (option: { description: string }) => option.description === 'Cash'
    //         )?.id,
    //         paydate: this.currdate,
    //         acknowledgeNo: this.acknowledgeNo,
    //         teller: this.teller,
    //       });
    //       this.allocateTable = false;
    //     }, 1000);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     console.log(error.message);
    //     if (error.error.errors.paidAmount) {
    //       this.messageService.add({
    //         severity: 'warn',
    //         summary: 'Error',
    //         detail: error.error.errors.paidAmount[0],
    //       });
    //     } else if (error.error.errors.itemfeeId) {
    //       this.messageService.add({
    //         severity: 'warn',
    //         summary: 'Error',
    //         detail: 'Allocate Fees required',
    //       });
    //     }
    //   },
    // });
  }

  tellerTransacForm() {
    this.AccountingService.gettelleruid().subscribe({
      next: (res) => {
        this.tellerdata = res;
        this.teller = this.tellerdata[0]?.username;
        this.acknowledgeNo = this.tellerdata?.receiptNumber;
        this.tellerid = this.tellerdata[0]?.account_id;
        this.studTransac.get('acknowledgeNo')?.setValue(this.acknowledgeNo);
        this.studTransac.get('teller')?.setValue(this.teller);
        this.studTransac.get('tellerId')?.setValue(this.tellerid);
        // console.log(res);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  displaystudLedg() {
    this.AccountingService.showstudLedger().subscribe({
      next: (res) => {
        this.info = res;
        this.studledgers = this.info[0];
        // console.log(this.studledgers);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  showallocateFees() {
    this.allocateTable = true;
    // console.log(this.paidAmount);
    const paidAmountValue = this.studTransac.value;
    this.AccountingService.allocateFees(paidAmountValue).subscribe({
      next: (res) => {
        this.allodata = res;
        this.allocation = this.allodata[0];
        const feeId = this.allocation[0]?.id;
        this.studTransac.get('itemfeeId')?.setValue(feeId);
        console.log(this.allocation);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getmop() {
    this.AccountingService.getmopdata().subscribe({
      next: (res) => {
        this.data = res;
        this.getmopdata = this.data[0];
        const initialOption = this.getmopdata.find(
          (option: { description: string }) => option.description === 'Cash'
        );
        if (initialOption) {
          this.studTransac.get('mop')?.setValue(initialOption.id);
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.displaystudLedg();
    this.getmop();
  }
}
