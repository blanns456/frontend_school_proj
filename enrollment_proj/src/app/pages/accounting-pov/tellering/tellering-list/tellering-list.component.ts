import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';
@Component({
  selector: 'app-tellering-list',
  templateUrl: './tellering-list.component.html',
  styleUrls: ['./tellering-list.component.css'],
})
export class TelleringListComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable', { static: false }) table: any;
  dataTable: any;

  constructor() {}

  students = [
    {
      id: 1,
      name: 'Rizal, Jose Patricio',
      mop: 'Cash',
      pdate: '04/12/2023',
      paytype: 'Recieved',
    },
    {
      id: 2,
      name: 'Badang, James Moreno',
      mop: 'GCash',
      pdate: '04/12/2023',
      paytype: 'Recieved',
    },
  ];

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    new DataTable(this.dataTable);
  }

  ngOnInit(): void {}
}
