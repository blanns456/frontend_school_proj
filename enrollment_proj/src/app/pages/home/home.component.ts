import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token) {
      if (role === 'college') {
        this.router.navigate(['student/home']);
      } else if (role === 'dean') {
        this.router.navigate(['dean/home']);
      } else if (role === 'Graduate Studies') {
        this.router.navigate(['maed']);
      } else if (role === 'teller') {
        this.router.navigate(['accounting']);
      } else if (role === 'registrar') {
        this.router.navigate(['registrar']);
      }
    }
  }
}
