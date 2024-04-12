import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import DataTable from 'datatables.net-dt';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { FilterService, MessageService, SelectItem } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accounting-item-management',
  templateUrl: './accounting-item-management.component.html',
  styleUrls: ['./accounting-item-management.component.css'],
  providers: [MessageService],
})
export class AccountingItemManagementComponent implements OnInit {
  dataTable: any;
  matrigroups: any;
  matriculation: any;
  data: any;
  info: any;
  addItemForm: FormGroup;
  selectFilter = [
    { id: 1, itemname: 'Miscellaneous' },
    { id: 2, itemname: 'Trust Funds' },
    { id: 3, itemname: 'Non Trust Funds' },
  ];
  selectedFilters: any[] = [];
  cols: any[] = [];

  constructor(
    private messageService: MessageService,
    private AccountingController: AccountingController
  ) {
    this.addItemForm = new FormGroup({
      itemName: new FormControl(null, [Validators.required]),
      itemGroup: new FormControl(null, [Validators.required]),
    });
  }

  filterData() {
    if (this.selectedFilters === null || this.selectedFilters.length === 0) {
      this.matriculation = this.data[0];
    } else {
      this.matriculation = this.data[0].filter(
        (item: { itemgroup: string; itemname: string; id: number }) =>
          this.selectedFilters.some((filter) => filter.id === item.id)
      );
      // console.log('selected data:', this.selectedFilters);
      // console.log('Filtered data:', this.matriculation);
      // console.log('data:', this.data[0]);
    }
  }

  submitItems() {
    // console.log(this.addItemForm.value);
    this.AccountingController.addMatriItems(this.addItemForm.value).subscribe({
      next: (res) => {
        console.log('Added Success', res);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Item added successfully',
        });
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  showallmatriItems() {
    this.AccountingController.showallitems().subscribe((res) => {
      this.data = res;
      this.matriculation = this.data[0];
      this.filterData();
    });
  }

  ngOnInit(): void {
    this.showallmatriItems();
    this.AccountingController.getmatrigroup().subscribe((res) => {
      this.info = res;
      this.matrigroups = this.info[0];
      console.log(this.matrigroups);
    });

    this.cols = [
      { field: 'itemname', header: 'Item Name' },
      { field: 'itemgroup', header: 'Item Group' },
      { field: 'action', header: 'Action' },
    ];
  }
}
