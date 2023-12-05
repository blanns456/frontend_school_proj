import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-registrar-sidebar',
  templateUrl: './registrar-sidebar.component.html',
  styleUrls: ['./registrar-sidebar.component.css']
})
export class RegistrarSidebarComponent {
   ngOnInit(): void { 
    $(document).ready(function () {
      // alert('hello world') tas alert to test if it work
      $('.menu-item').click(function() {
    // Remove the 'active' class from all menu items
        $('.menu-item').removeClass('active');

    // Add the 'active' class to the clicked menu item
        $(this).addClass('active');
    });
      let accSetup = 0;
            $('#accSetupToggle').click(function() {
                accSetup++;
                if (accSetup % 2 == 0) {
                    $('.accSetupToggle-sub').slideToggle();
                } else {
                    $('.accSetupToggle-sub').slideDown();
                }
            });
      let accReport = 0;
            $('#accReportsToggle').click(function() {
                accReport++;
                if (accReport % 2 == 0) {
                    $('.accReportsToggle-sub').slideToggle();
                } else {
                    $('.accReportsToggle-sub').slideDown();
                }
            });
      let accFinance = 0;
            $('#accFinanceToggle').click(function() {
                accFinance++;
                if (accFinance % 2 == 0) {
                    $('.accFinanceToggle-sub').slideToggle();
                } else {
                    $('.accFinanceToggle-sub').slideDown();
                }
            });
      let tellering = 0;
            $('#telleringToggle').click(function() {
                tellering++;
                if (tellering % 2 == 0) {
                    $('.telleringToggle-sub').slideToggle();
                } else {
                    $('.telleringToggle-sub').slideDown();
                }
            });
    })
  }
}
