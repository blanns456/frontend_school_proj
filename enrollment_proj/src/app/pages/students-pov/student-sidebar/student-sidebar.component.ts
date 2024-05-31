import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css'],
})
export class StudentSidebarComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onLogout(): void {
    this.authService.logout().subscribe({
      next: () => {
      },error:(err) =>{
        console.log(err);
      }
    })
  }
}
