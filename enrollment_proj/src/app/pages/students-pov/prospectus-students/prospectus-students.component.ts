import { Component } from '@angular/core';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prospectus-students',
  templateUrl: './prospectus-students.component.html',
  styleUrls: ['./prospectus-students.component.css']
})
export class ProspectusStudentsComponent {
  constructor(private prospectus_get: ProspectusController, private http: HttpClient) {}
}
