import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-department-ui',
  templateUrl: './department-ui.component.html',
  styleUrls: ['./department-ui.component.css']
})
export class DepartmentUiComponent {

  constructor(private router: Router) { }

  ngOnAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
