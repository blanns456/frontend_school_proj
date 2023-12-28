import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-deans-grade-approval',
  templateUrl: './deans-grade-approval.component.html',
  styleUrls: ['./deans-grade-approval.component.css']
})
export class DeansGradeApprovalComponent implements OnInit, AfterViewInit {
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
