import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import DataTable from 'datatables.net-dt';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import {
  MessageService,
  PrimeNGConfig,
  ConfirmationService,
} from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-accounting-item-management',
  templateUrl: './accounting-item-management.component.html',
  styleUrls: ['./accounting-item-management.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingItemManagementComponent implements OnInit {
  dataTable: any;
  matrigroups: any;
  categorylist: any;
  data: any;
  info: any;
  getiteminfo: any;
  addCategoryForm: FormGroup;
  addItemForm: FormGroup;
  selectedFilters: any[] = [];
  visible: boolean = false;
  dialogVisible: boolean = false;
  itemModal: boolean = false;
  showDetails: boolean = false;
  showaddFeesForm: boolean = false;
  selectedItems: any[] = [];
  rows1: any[] = [];
  selectFilter = [
    { id: 1, itemname: 'Miscellaneous' },
    { id: 2, itemname: 'Trust Funds' },
    { id: 3, itemname: 'Non Trust Funds' },
  ];
  activeyr: any;
  seminfo: any;
  semester: any;
  categ_id: number | null = null;
  //dom
  displayedItemName!: string;
  displayedamount!: number;
  getcatItem: any;
  getgroups: any;
  getgroupId: any;
  displayedGroupName!: string;
  displayedCategoryName!: string;
  groupidFees!: number;
  showFeesDetails: boolean = false;
  getfeesinfo: any;
  itemfeesList: any;
  getamount: any;
  totalamount!: number;
  totalincrease!: number;

  constructor(
    private semester_controller: SemesterController,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private AccountingController: AccountingController
  ) {
    this.addCategoryForm = new FormGroup({
      category_name: new FormControl(null, [Validators.required]),
      semesteryr: new FormControl('', [Validators.required]),
    });

    this.addItemForm = new FormGroup({
      itemGroup: new FormControl(null, [Validators.required]),
    });
  }

  showDialog() {
    this.visible = true;
  }

  addItembtn(categ_id: number, category_name: string) {
    // console.log(categ_id);
    this.categ_id = categ_id;
    this.displayedItemName = category_name;
    this.itemModal = true;
  }

  showDetailitem(categ_id: number) {
    this.AccountingController.getmatrigroup(categ_id).subscribe({
      next: (res) => {
        this.info = res;
        this.matrigroups = this.info[0];
        this.displayedCategoryName = this.matrigroups[0]['category_name'];
        // console.log(this.matrigroups);
        this.showDetails = true;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Please try again',
        });
      },
    });
  }

  addRow(item: number) {
    const newRow = {
      item_name: '',
      amount: '',
      increase: '',
      percent: '',
    };

    switch (item) {
      case 1:
        this.rows1.push(newRow);
        break;
      default:
        break;
    }
  }

  filterInput(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.categorylist = this.data[0].filter(
      (item: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(filterValue)
        )
    );
  }

  filterData() {
    if (this.selectedFilters === null || this.selectedFilters.length === 0) {
      this.categorylist = this.data[0];
    } else {
      this.categorylist = this.data[0].filter((item: { id: number }) =>
        this.selectedFilters.some((filter) => filter.id === item.id)
      );
    }
  }

  deleteSelectedItems(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.selectedItems.forEach((item) => {
          const itemId = item.itemID;
          // console.log(itemId);
          this.AccountingController.deleteItem(itemId).subscribe({
            next: (res) => {
              console.log(res);
              this.messageService.add({
                severity: 'info',
                summary: 'Confirmed',
                detail: 'Record deleted',
              });
            },
            error: (error: HttpErrorResponse) => {
              console.log(error.message);
            },
          });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  saveFeesData() {
    const allRows = [...this.rows1];
    const itemDetailsData = allRows.map((row) => ({
      itemName: row.item_name,
      itemGroupid: this.groupidFees,
      amount: row.amount,
      increase: row.increase,
      percent: row.percent,
    }));
    itemDetailsData.forEach((e) => {
      this.AccountingController.addMatriItems({
        itemName: e.itemName,
        itemGroupid: e.itemGroupid,
        amount: e.amount,
        increase: e.increase,
        percent: e.percent,
      }).subscribe({
        next: (res) => {
          console.log('Success', res);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Added Successfully',
          });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      });
    });
  }

  additemfeesbtn(groupid: number, group_name: string) {
    this.displayedGroupName = group_name;
    this.groupidFees = groupid;
    // alert(groupid);
    this.showaddFeesForm = true;
  }

  viewitemfeesbtn(groupid: number, group_name: string) {
    this.showFeesDetails = true;
    this.displayedGroupName = group_name;
    // alert(groupid);

    this.AccountingController.showallitemFees(groupid).subscribe({
      next: (res) => {
        this.getfeesinfo = res;
        this.itemfeesList = this.getfeesinfo[0];
        // console.log(this.itemfeesList);
        let total = 0;
        let total2 = 0;
        for (let item of this.itemfeesList) {
          this.totalamount = total += parseFloat(item.amount);
          this.totalincrease = total2 += parseFloat(item.increase);
        }
        // console.log('Total amount:', this.totalamount);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  submitItems() {
    const itgroup = this.addItemForm.get('itemGroup')?.value;
    const cat_id = this.categ_id || 0;
    this.AccountingController.addItemGroup({
      itemGroup: itgroup,
      categ_id: cat_id,
    }).subscribe({
      next: (res) => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Successfully Added',
          detail: 'Add Item Group',
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    });
  }

  submitCategory() {
    this.AccountingController.addcategory(this.addCategoryForm.value).subscribe(
      {
        next: (res) => {
          console.log('Added Success', res);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Category added successfully',
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        },
      }
    );
  }

  showallcategory() {
    this.AccountingController.showallcategory().subscribe((res) => {
      this.data = res;
      this.categorylist = this.data[0];
      // console.log(this.categorylist);
      this.filterData();
    });
  }

  getsemester() {
    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.seminfo = res;
      this.semester = this.seminfo[0][0]['id'];
      this.activeyr = this.seminfo[0][0]['active_year'];
      this.addCategoryForm.get('semesteryr')?.setValue(this.semester);
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.showallcategory();
    this.getsemester();
  }
}
