import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';
declare var $: any;


@Component({
  selector: 'app-officially-enrolled',
  templateUrl: './officially-enrolled.component.html',
  styleUrls: ['./officially-enrolled.component.css']
})
export class OfficiallyEnrolledComponent implements OnInit, AfterViewInit {
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
