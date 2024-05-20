import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeanServicesService } from 'src/app/services/dean-services.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { SectionController } from 'src/app/controllers/section_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deans-classroom',
  templateUrl: './deans-classroom.component.html',
  styleUrls: ['./deans-classroom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeansClassroomComponent implements OnInit {
  sections: any[] = [];
  selectedSection: any = null;
  students: any[] = [];
  loadingSections: boolean = false;
  loadingStudents: boolean = false;
  data: any;

  constructor(private sectionService: DeanServicesService) { }

  ngOnInit(): void {
    this.fetchSections();
  }

  fetchSections(): void {
    this.loadingSections = true;
    this.sectionService.getSections().subscribe(
      data => {
        this.sections = data;
        this.loadingSections = false;
      },
      error => {
        console.error('Error fetching sections', error);
        this.loadingSections = false;
      }
    );
  }

  onSelectSection(section: any): void {
    this.selectedSection = section;
    this.fetchStudentsInSection(section.section_id);
  }

  fetchStudentsInSection(sectionId: number): void {
    this.loadingStudents = true;
    this.sectionService.getStudentsInSection(sectionId).subscribe({
      next: (response) => {
        this.data = response;
        this.students = this.data;
        this.loadingStudents = false;
        // console.log(this.students);
      }, error: (error) => {
        console.error('Error fetching students', error);
        this.loadingStudents = false;
      }
    })
    // this.sectionService.getStudentsInSection(sectionId).subscribe(
    //   response => {
    //     this.data = response;
    //     this.students = this.data[0];
    //     this.loadingStudents = false;
    //     console.log(this.students);
    //   },
    //   error => {
    //     console.error('Error fetching students', error);
    //     this.loadingStudents = false;
    //   }
    // );
  }

}
