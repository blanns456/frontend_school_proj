import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import DataTable from 'datatables.net-dt';
declare var $: any;

@Component({
  selector: 'app-student-applicants',
  templateUrl: './student-applicants.component.html',
  styleUrls: ['./student-applicants.component.css']
})
export class StudentApplicantsComponent implements OnInit, AfterViewInit {
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
