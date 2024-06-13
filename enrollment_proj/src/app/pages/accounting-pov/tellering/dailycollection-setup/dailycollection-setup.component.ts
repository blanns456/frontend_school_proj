import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-dailycollection-setup',
  templateUrl: './dailycollection-setup.component.html',
  styleUrls: ['./dailycollection-setup.component.css']
})
export class DailycollectionSetupComponent implements OnInit, AfterViewInit {
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
