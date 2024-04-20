import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import {
  MessageService,
  PrimeNGConfig,
  ConfirmationService,
} from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { SemesterController } from 'src/app/controllers/semester_controller.component';

@Component({
  selector: 'app-item-modals',
  templateUrl: './item-modals.component.html',
  styleUrls: ['./item-modals.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ItemModalsComponent implements OnInit {
  data: any;
  info: any;
  addItemForm: FormGroup;
  itemModal: boolean = false;
  seminfo: any;
  semester: any;
  activeyr: any;

  constructor(
    private AccountingController: AccountingController,
    private semester_controller: SemesterController,
    private confirmationService: ConfirmationService
  ) {
    this.addItemForm = new FormGroup({
      itemName: new FormControl(null, [Validators.required]),
    });
  }

  submitItems() {
    console.log(this.addItemForm.value);
  }

  ngOnInit(): void {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.seminfo = res;
      this.semester = this.seminfo[0][0]['id'];
      this.activeyr = this.seminfo[0][0]['active_year'];
    });
  }
}
