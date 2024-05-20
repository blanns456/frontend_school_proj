import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router, NavigationExtras } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-tellering-list',
  templateUrl: './tellering-list.component.html',
  styleUrls: ['./tellering-list.component.css'],
})
export class TelleringListComponent implements OnInit {
  info: any;
  studledgers: any;
  dialogVisible: boolean = false;

  constructor(
    private AccountingController: AccountingController,
    private messageService: MessageService,
    private router: Router
  ) {}

  showdialog(stud_id: number, stud: any) {
    this.dialogVisible = true;

    const navigationExtras: NavigationExtras = {
      state: {
        studentLedg: stud,
      },
    };
    this.router.navigate(['/teller-viewuser'], navigationExtras);
    // alert(stud_id);
  }

  displaystudLedg() {
    this.AccountingController.showstudLedger().subscribe({
      next: (res) => {
        this.info = res;
        this.studledgers = this.info[0];
        console.log(this.studledgers);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.displaystudLedg();
  }
}
