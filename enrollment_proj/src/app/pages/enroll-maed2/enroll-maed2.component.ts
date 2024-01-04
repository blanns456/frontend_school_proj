import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-enroll-maed2',
  templateUrl: './enroll-maed2.component.html',
  styleUrls: ['./enroll-maed2.component.css']
})
export class EnrollMaed2Component implements OnInit {
  data: any;
  lastnameval: string = '';
  lastnameisEmpty = false;
  firstnameval: string = '';
  firstnameisEmpty = false;
  midnameval: string = '';
  midnameisEmpty = false;
  suffixval: string = '';
  birthdayval: string = '';
  birthdayisEmpty = false;
  religionval: string = '';
  religionisEmpty = false;
  emailAddval: string = '';
  emailAddisEmpty = false;
  birthPlaceval: string = '';
  birthPlaceisEmpty = false;
  citizenval: string = '';
  citizenisEmpty = false;
  contact_numval: string = '';
  contact_numisEmpty = false;
  genderval: string = '';
  genderisEmpty = false;
  civilStatusval: string = '';
  civilStatusisEmpty = false;
  permaAddressval: string = '';
  permaAddressisEmpty = false;
  homeAddressval: string = '';
  homeAddressisEmpty = false;

  ngOnInit(): void {
  }

  constructor(
    private router: Router
  ) { }


  lastname(event: Event) {
    const lastnameValue = (event.target as HTMLSelectElement).value;
    this.lastnameisEmpty = lastnameValue === '';
    this.lastnameval = lastnameValue;
  }

  firstname(event: Event) {
    const firstnameValue = (event.target as HTMLSelectElement).value;
    this.firstnameisEmpty = firstnameValue === '';
    this.firstnameval = firstnameValue;
  }

  midname(event: Event) {
    const midnameValue = (event.target as HTMLSelectElement).value;
    this.midnameisEmpty = midnameValue === '';
    this.midnameval = midnameValue;
  }

  suffix(event: Event) {
    const suffixval = (event.target as HTMLSelectElement).value;
    this.suffixval = suffixval;
  }

  birthday(event: Event) {
    const birthdateValue = (event.target as HTMLSelectElement).value;
    this.birthdayisEmpty = birthdateValue === '';
    this.birthdayval = birthdateValue;
  }

  religion(event: Event) {
    const religionValue = (event.target as HTMLSelectElement).value;
    this.religionisEmpty = religionValue === '';
    this.religionval = religionValue;
  }

  emailAdd(event: Event) {
    const emailAddressValue = (event.target as HTMLSelectElement).value;
    this.emailAddisEmpty = emailAddressValue === '';
    this.emailAddval = emailAddressValue;
  }

  birthPlace(event: Event) {
    const birthPlaceValue = (event.target as HTMLSelectElement).value;
    this.birthPlaceisEmpty = birthPlaceValue === '';
    this.birthPlaceval = birthPlaceValue;
  }

  citizenship(event: Event) {
    const citizenshipValue = (event.target as HTMLSelectElement).value;
    this.citizenisEmpty = citizenshipValue === '';
    this.citizenval = citizenshipValue;
  }

  contact_num(event: Event) {
    const contactNumValue = (event.target as HTMLSelectElement).value;
    this.contact_numisEmpty = contactNumValue === '';
    this.contact_numval = contactNumValue;
  }

  gender(event: Event) {
    const genderValue = (event.target as HTMLSelectElement).value;
    this.genderisEmpty = genderValue === '';
    this.genderval = genderValue;
  }

  civilStatus(event: Event) {
    const civilstatusValue = (event.target as HTMLSelectElement).value;
    this.civilStatusisEmpty = civilstatusValue === '';
    this.civilStatusval = civilstatusValue;
  }

  permaAddress(event: Event) {
    const permaAddressValue = (event.target as HTMLSelectElement).value;
    this.permaAddressisEmpty = permaAddressValue === '';
    this.permaAddressval = permaAddressValue;
  }

  homeAddress(event: Event) {
    const homeAddressValue = (event.target as HTMLSelectElement).value;
    this.homeAddressisEmpty = homeAddressValue === '';
    this.homeAddressval = homeAddressValue;
  }

  currentPage: number = 2;
  totalPages: number = 4;

  onPageChanged(page: number) {
    if (page > this.currentPage) {
      if (!this.lastnameval ||
        !this.firstnameval ||
        !this.midnameval ||
        !this.birthdayval ||
        !this.religionval ||
        !this.emailAddval ||
        !this.birthPlaceval ||
        !this.citizenval ||
        !this.genderval ||
        !this.contact_numval ||
        !this.civilStatusval ||
        !this.permaAddressval ||
        !this.homeAddressval
      ) {
        this.lastnameisEmpty = !this.lastnameval;
        this.firstnameisEmpty = !this.firstnameval;
        this.midnameisEmpty = !this.midnameval;
        this.birthdayisEmpty = !this.birthdayval;
        this.religionisEmpty = !this.religionval;
        this.emailAddisEmpty = !this.emailAddval;
        this.birthPlaceisEmpty = !this.birthPlaceval;
        this.citizenisEmpty = !this.citizenval;
        this.contact_numisEmpty = !this.contact_numval;
        this.genderisEmpty = !this.genderval;
        this.civilStatusisEmpty = !this.civilStatusval;
        this.permaAddressisEmpty = !this.permaAddressval;
        this.homeAddressisEmpty = !this.homeAddressval;

        Swal.fire(
          'ERROR',
          'All input must be required',
          'error'
        )
      } else {
        page;
        // alert(page);
        if (page === 1) {
          this.router.navigate(['/enroll-maed']);
        }
        if (page === 3) {
          this.router.navigate(['/enroll-maed-education-record']);
        }
      }
    } else {
      page;
      // alert(page);
      if (page === 1) {
        this.router.navigate(['/enroll-maed']);
      }
      if (page === 3) {
        this.router.navigate(['/enroll-maed-education-record']);
      }
    }

  }


}
