import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-deans-subjectlist',
  templateUrl: './deans-subjectlist.component.html',
  styleUrls: ['./deans-subjectlist.component.css']
})
export class DeansSubjectlistComponent implements OnInit, AfterViewInit {
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
