import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-dailycollection-reports',
  templateUrl: './dailycollection-reports.component.html',
  styleUrls: ['./dailycollection-reports.component.css']
})
export class DailycollectionReportsComponent implements OnInit, AfterViewInit {
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
