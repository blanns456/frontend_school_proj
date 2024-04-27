import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { DeanServicesService } from 'src/app/services/dean-services.service';

@Component({
  selector: 'app-deans-sidebar',
  templateUrl: './deans-sidebar.component.html',
  styleUrls: ['./deans-sidebar.component.css']
})
export class DeansSidebarComponent {
  data: any;
  dean_account: any;

  constructor(
    private logincontroller: LoginController,
    private http: HttpClient,
    private dean: DeanServicesService) { }

  ngOnInit() {
    this.dean.dean_details().subscribe({
      next: (response) => {
        this.data = response;
        this.dean_account = this.data[0];
        // console.log(this.dean_account);
      }
    })
  }

  logout() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.http.get(this.logincontroller.Root_URL + 'logout', { headers: headers })
      .subscribe({
        next: (res: any) => {
        },
        error: (error: any) => {
          console.error('Error:', error);
        }
      });
  }
}
