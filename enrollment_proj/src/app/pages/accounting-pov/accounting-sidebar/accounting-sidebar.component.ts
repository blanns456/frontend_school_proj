import { Component, OnInit } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import * as $ from 'jquery'; // kini sa pgdeclare nis $

@Component({
  selector: 'app-accounting-sidebar',
  templateUrl: './accounting-sidebar.component.html',
  styleUrls: ['./accounting-sidebar.component.css'],
})
export class AccountingSidebarComponent implements OnInit {
  constructor(private logincontroller: LoginController) {}
  accountingdata: any;
  accname: any;
  sidebarVisible: boolean = false;

  ngOnInit(): void {
    $(document).ready(function () {
      $('.menu-item').click(function () {
        $('.menu-item').removeClass('active');
        $(this).addClass('active');
      });

      let accSetup = 0;
      $('#accSetupToggle').click(function () {
        accSetup++;
        if (accSetup % 2 == 0) {
          $('.accSetupToggle-sub').slideToggle();
        } else {
          $('.accSetupToggle-sub').slideDown();
        }
      });
      let accReport = 0;
      $('#accReportsToggle').click(function () {
        accReport++;
        if (accReport % 2 == 0) {
          $('.accReportsToggle-sub').slideToggle();
        } else {
          $('.accReportsToggle-sub').slideDown();
        }
      });
      let accFinance = 0;
      $('#accFinanceToggle').click(function () {
        accFinance++;
        if (accFinance % 2 == 0) {
          $('.accFinanceToggle-sub').slideToggle();
        } else {
          $('.accFinanceToggle-sub').slideDown();
        }
      });
      let tellering = 0;
      $('#telleringToggle').click(function () {
        tellering++;
        if (tellering % 2 == 0) {
          $('.telleringToggle-sub').slideToggle();
        } else {
          $('.telleringToggle-sub').slideDown();
        }
      });
    });

    // this.accountingdata = this.logincontroller.getuserdetails();
    // // console.log(this.accountingdata);

    // this.accname =
    //   this.accountingdata[0]['last_name'] +
    //   ', ' +
    //   this.accountingdata[0]['first_name'];
    // console.log(this.accname);
  }
}
