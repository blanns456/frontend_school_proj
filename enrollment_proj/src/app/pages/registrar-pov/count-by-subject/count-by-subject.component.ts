import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';
declare var $: any;

@Component({
  selector: 'app-count-by-subject',
  templateUrl: './count-by-subject.component.html',
  styleUrls: ['./count-by-subject.component.css']
})
export class CountBySubjectComponent implements OnInit, AfterViewInit {
  @ViewChild('dataTable',{static: false}) table:any;
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
