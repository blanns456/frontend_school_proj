import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-accounting-item-management',
  templateUrl: './accounting-item-management.component.html',
  styleUrls: ['./accounting-item-management.component.css']
})
export class AccountingItemManagementComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: any;
  dataTable: any;
  constructor() {

  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    new DataTable(this.dataTable);
  }

  ngOnInit(): void {

  }
}
