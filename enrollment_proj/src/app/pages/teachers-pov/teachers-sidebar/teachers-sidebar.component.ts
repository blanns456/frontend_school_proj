import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-teachers-sidebar',
  templateUrl: './teachers-sidebar.component.html',
  styleUrls: ['./teachers-sidebar.component.css']
})
export class TeachersSidebarComponent implements OnInit {
  ngOnInit(): void {
    $('document').ready(function () {
      let accSetup = 0;
      $('#classList').click(function () {
        accSetup++;
        if (accSetup % 2 == 0) {
          $('.classList-sub').slideToggle();
        } else {
          $('.classList-sub').slideDown();
        }
      });
    })
  }
}
