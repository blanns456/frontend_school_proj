// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Location } from '@angular/common';
// import {
//   FormBuilder,
//   FormGroup,
//   Validators,
//   FormsModule,
//   FormControl,
// } from '@angular/forms';
// import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
// import { LoginController } from 'src/app/controllers/login_controller.component';
// import Region from 'src/assets/json/region.json';
// import Province from 'src/assets/json/province.json';
// import City from 'src/assets/json/city.json';
// import Barangay from 'src/assets/json/barangay.json';
// import SignaturePad from 'signature_pad';
// import { MessageService } from 'primeng/api';
// import { error } from 'jquery';
// import { UpdateStudentServiceService } from 'src/app/services/update-student-service.service';
// import nationalities from '../../../../assets/json/nationalities.json';
// import religions from '../../../../assets/json/religions.json';
// import { Router } from '@angular/router';
// import { CollegeService } from 'src/app/services/college.service';

// @Component({
//   selector: 'app-update-info',
//   templateUrl: './update-info.component.html',
//   styleUrls: ['./update-info.component.css'],
// })
// export class UpdateInfoComponent {
//   selectedPresentRegion: any;
//   selectedPresentProvince: any;
//   selectedPresentCity: any;
//   selectedPresentBarangay: any;
//   filteredPresentProvinces: any;
//   filteredPresentCities: any;
//   filteredPresentBarangays: any;
//   imageURL: any;
//   nationalitiesList: string[] = [];
//   religionList: string[] = [];
//   selectedCitizenship: any;
//   selectedReligion: any;
//   noMiddleName = false;

//   onEdit() {
//     throw new Error('Method not implemented.');
//   }
//   studentdata: any;
//   civil_statusval: any;
//   first_name: any;
//   loaddetails = false;
//   data: any;
//   date: any;
//   regions: any = Region;
//   provinces: any = Province;
//   city: any = City;
//   barangay: any = Barangay;

//   selectedRegion: any;
//   filteredProvinces: any[] = [];
//   selectedProvince: any;
//   filteredCities: any[] = [];
//   selectedCity: any;
//   filteredBarangays: any[] = [];
//   selectedBarangay: any;

//   signatureNeeded!: boolean;
//   signaturePad!: SignaturePad;
//   signatureImg!: string;
//   @ViewChild('canvas') canvasEl!: ElementRef;
//   constructor(
//     private student: UpdateStudentServiceService,
//     private formBuilder: FormBuilder,
//     private messageService: MessageService,
//     private college: CollegeService,
//     private location: Location,
//     private router: Router
//   ) {}

//   onRegionChange(event: any) {
//     const regionName = event.target.value;
//     this.selectedRegion = this.regions.find(
//       (region: { region_name: any }) => region.region_name === regionName
//     );
//     this.selectedProvince = null;
//     this.selectedCity = null;
//     this.selectedBarangay = null;

//     if (this.selectedRegion) {
//       this.filteredProvinces = this.provinces.filter(
//         (province: { region_code: any }) =>
//           province.region_code === this.selectedRegion.region_code
//       );
//     } else {
//       this.filteredProvinces = [];
//     }
//   }

//   onProvinceChange(event: any) {
//     const provinceName = event.target?.value;
//     const selectedProvince = this.filteredProvinces.find(
//       (province) => province.province_name === provinceName
//     );
//     if (selectedProvince) {
//       // console.log("Selected Province:", selectedProvince);
//       this.filteredCities = this.city.filter(
//         (city: { province_code: any }) =>
//           city.province_code === selectedProvince.province_code
//       );
//       // console.log("Filtered Cities:", this.filteredCities);
//       this.selectedCity = null;
//       this.selectedBarangay = null;
//     }
//   }

//   onCityChange(event: any) {
//     const cityName = event.target?.value;
//     this.selectedCity = this.filteredCities.find(
//       (city) => city.city_name === cityName
//     );
//     if (this.selectedCity) {
//       this.filteredBarangays = this.barangay.filter(
//         (barangay: { city_code: any }) =>
//           barangay.city_code === this.selectedCity.city_code
//       );
//     } else {
//       this.filteredBarangays = [];
//     }
//   }

//   onPresentRegionChange(event: any) {
//     const regionName = event.target.value;
//     this.selectedPresentRegion = this.regions.find(
//       (region: { region_name: any }) => region.region_name === regionName
//     );
//     this.selectedPresentProvince = null;
//     this.selectedPresentCity = null;
//     this.selectedPresentBarangay = null;

//     if (this.selectedPresentRegion) {
//       this.filteredPresentProvinces = this.provinces.filter(
//         (province: { region_code: any }) =>
//           province.region_code === this.selectedPresentRegion.region_code
//       );
//     } else {
//       this.filteredPresentProvinces = [];
//     }
//   }

//   onPresentProvinceChange(event: any) {
//     const provinceName = event.target?.value;
//     const selectedProvince = this.filteredPresentProvinces.find(
//       (province: { province_name: any }) =>
//         province.province_name === provinceName
//     );
//     if (selectedProvince) {
//       this.filteredPresentCities = this.city.filter(
//         (city: { province_code: any }) =>
//           city.province_code === selectedProvince.province_code
//       );
//       this.selectedPresentCity = null;
//       this.selectedPresentBarangay = null;
//     }
//   }

//   onPresentCityChange(event: any) {
//     const cityName = event.target?.value;
//     this.selectedPresentCity = this.filteredPresentCities.find(
//       (city: { city_name: any }) => city.city_name === cityName
//     );
//     if (this.selectedPresentCity) {
//       this.filteredPresentBarangays = this.barangay.filter(
//         (barangay: { city_code: any }) =>
//           barangay.city_code === this.selectedPresentCity.city_code
//       );
//     } else {
//       this.filteredPresentBarangays = [];
//     }
//   }

//   onSameAsHomeChange(event: any) {
//     const isSameAsHome = event.target.checked;

//     if (isSameAsHome) {
//       const homeRegion = this.update_student.get('home_region')?.value;
//       const homeProvince = this.update_student.get('home_province')?.value;
//       const homeCity = this.update_student.get('home_city')?.value;
//       const homeBarangay = this.update_student.get('home_barangay')?.value;
//       const homeStreet = this.update_student.get('home_street')?.value;
//       const homeZip = this.update_student.get('home_zip')?.value;

//       this.update_student.patchValue({
//         present_region: homeRegion,
//         present_province: homeProvince,
//         present_city: homeCity,
//         present_barangay: homeBarangay,
//         present_street: homeStreet,
//         present_zip: homeZip,
//       });

//       // Find the selected region object from the regions array
//       const selectedRegion = this.regions.find(
//         (region: { region_name: any }) => region.region_name === homeRegion
//       );

//       if (selectedRegion) {
//         // Filter provinces based on the selected region code
//         this.filteredPresentProvinces = this.provinces.filter(
//           (province: { region_code: any }) =>
//             province.region_code === selectedRegion.region_code
//         );

//         // Find the selected province object from the filtered provinces array
//         const selectedProvince = this.filteredPresentProvinces.find(
//           (province: { province_name: any }) =>
//             province.province_name === homeProvince
//         );

//         if (selectedProvince) {
//           // Filter cities based on the selected province code
//           this.filteredPresentCities = this.city.filter(
//             (city: { province_code: any }) =>
//               city.province_code === selectedProvince.province_code
//           );

//           // Find the selected city object from the filtered cities array
//           const selectedCity = this.filteredPresentCities.find(
//             (city: { city_name: any }) => city.city_name === homeCity
//           );

//           if (selectedCity) {
//             // Filter barangays based on the selected city code
//             this.filteredPresentBarangays = this.barangay.filter(
//               (barangay: { city_code: any }) =>
//                 barangay.city_code === selectedCity.city_code
//             );
//           }
//         }
//       }
//     } else {
//       this.update_student.patchValue({
//         present_region: null,
//         present_province: null,
//         present_city: null,
//         present_barangay: null,
//         present_street: null,
//         present_zip: null,
//       });

//       // Clear the filtered lists for present address
//       this.filteredPresentProvinces = [];
//       this.filteredPresentCities = [];
//       this.filteredPresentBarangays = [];
//     }
//   }

//   async ngOnInit(): Promise<void> {
//     this.nationalitiesList = nationalities;
//     this.religionList = religions;

//     try {
//       const res = await this.college.information();
//       this.data = res;
//       this.date = new Date(this.data.birth_date);

//       if (this.data) {
//         this.update_student.patchValue({
//           first_name: this.data.first_name,
//           last_name: this.data.last_name,
//           middle_name: this.data.middle_name,
//           gender: this.data.gender,
//           email: this.data.user.email,
//           birth_date: this.date,
//           citizenship: this.data.citizenship,
//           religion: this.data.religion,
//           contact_number: this.data.contact_number,
//           civil_status: this.data.civil_status,
//           birth_place: this.data.birth_place,
//           elem_school: this.data.elem_school,
//           elem_year: this.data.elem_year,
//           jhs_school: this.data.jhs_school,
//           jhs_year: this.data.jhs_year,
//           shs_school: this.data.shs_school,
//           shs_year: this.data.shs_year,
//           last_school: this.data.last_school,
//           last_school_year: this.data.last_school_year,
//           father_name: this.data.student_parent?.father_name || '',
//           father_employed: this.data.student_parent?.father_employed || '',
//           father_occupation: this.data.student_parent?.father_occupation || '',
//           father_contact: this.data.student_parent?.father_contact || '',
//           mother_name: this.data.student_parent?.mother_name || '',
//           mother_employed: this.data.student_parent?.mother_employed || '',
//           mother_occupation: this.data.student_parent?.mother_occupation || '',
//           mother_contact: this.data.student_parent?.mother_contact || '',
//           guardian_name: this.data.student_parent?.guardian_name || '',
//           guardian_employed: this.data.student_parent?.guardian_employed || '',
//           guardian_occupation:
//             this.data.student_parent?.guardian_occupation || '',
//           guardian_contact: this.data.student_parent?.guardian_contact || '',
//         });
//       }
//     } catch (error) {
//       // console.error('Error fetching information', error);
//     }
//   }

//   visible: boolean = false;
//   showDialog() {
//     this.visible = true;
//   }

//   update_student: FormGroup = this.formBuilder.group({
//     first_name: ['', [Validators.required]],
//     middle_name: new FormControl(
//       {
//         value: this.noMiddleName ? 'N/A' : null,
//         disabled: this.noMiddleName,
//       },
//       Validators.required
//     ),
//     last_name: ['', [Validators.required]],
//     suffix: [''],
//     gender: ['', [Validators.required]],
//     civil_status: ['', [Validators.required]],
//     birth_place: ['', [Validators.required]],
//     birth_date: ['', [Validators.required]],
//     religion: ['', [Validators.required]],
//     citizenship: ['', [Validators.required]],
//     contact_number: ['', [Validators.required]],
//     email: ['', [Validators.required]],
//     elem_school: ['', [Validators.required]],
//     elem_year: ['', [Validators.required]],
//     jhs_school: ['', [Validators.required]],
//     jhs_year: ['', [Validators.required]],
//     shs_school: ['', [Validators.required]],
//     shs_year: ['', [Validators.required]],
//     last_school: ['', [Validators.required]],
//     last_school_year: ['', [Validators.required]],
//     father_name: [''],
//     father_employed: [''],
//     father_occupation: [''],
//     father_contact: [''],
//     mother_name: [''],
//     mother_employed: [''],
//     mother_occupation: [''],
//     mother_contact: [''],
//     guardian_name: [''],
//     guardian_employed: [''],
//     guardian_occupation: [''],
//     guardian_contact: [''],
//     home_region: ['', [Validators.required]],
//     home_province: ['', [Validators.required]],
//     home_city: ['', [Validators.required]],
//     home_barangay: ['', [Validators.required]],
//     home_street: ['', [Validators.required]],
//     home_zip: ['', [Validators.required]],
//     present_region: ['', [Validators.required]],
//     present_province: ['', [Validators.required]],
//     present_city: ['', [Validators.required]],
//     present_barangay: ['', [Validators.required]],
//     present_street: ['', [Validators.required]],
//     present_zip: ['', [Validators.required]],
//     profile: ['', [Validators.required]],
//     signature: ['', [Validators.required]],
//   });

//   showPreview(event: Event) {
//     const inputElement = event.target as HTMLInputElement;
//     if (inputElement.files && inputElement.files.length > 0) {
//       const file = inputElement.files[0];

//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imageURL = reader.result as string;
//       };
//       reader.readAsDataURL(file);
//       this.update_student.patchValue({
//         profile: file,
//       });
//     }
//   }

//   ngAfterViewInit() {
//     this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
//   }

//   startDrawing(event: Event) {}

//   moved(event: Event) {}

//   clearPad() {
//     this.signaturePad.clear();
//   }

//   update() {
//     const base64Data = this.signaturePad.toDataURL();
//     this.signatureImg = base64Data;
//     this.signatureNeeded = this.signaturePad.isEmpty();
//     if (!this.signatureNeeded) {
//       this.signatureNeeded = false;
//     }

//     this.update_student.patchValue({
//       signature: this.signatureImg,
//     });

//     const formData = new FormData();

//     formData.append(
//       'first_name',
//       this.update_student.controls['first_name'].value
//     );
//     formData.append(
//       'middle_name',
//       this.update_student.controls['middle_name'].value ?? ''
//     );

//     formData.append(
//       'last_name',
//       this.update_student.controls['last_name'].value
//     );
//     formData.append('suffix', this.update_student.controls['suffix'].value);
//     formData.append('gender', this.update_student.controls['gender'].value);
//     formData.append(
//       'civil_status',
//       this.update_student.controls['civil_status'].value
//     );
//     formData.append(
//       'citizenship',
//       this.update_student.controls['citizenship'].value
//     );
//     formData.append('religion', this.update_student.controls['religion'].value);
//     formData.append(
//       'contact_number',
//       this.update_student.controls['contact_number'].value
//     );
//     formData.append('email', this.update_student.controls['email'].value);
//     formData.append(
//       'birth_date',
//       this.update_student.controls['birth_date'].value
//     );
//     formData.append(
//       'birth_place',
//       this.update_student.controls['birth_place'].value
//     );
//     formData.append(
//       'home_address',
//       `${this.update_student.get('home_street')?.value} ${
//         this.update_student.get('home_barangay')?.value
//       } ${this.update_student.get('home_city')?.value} ${
//         this.update_student.get('home_province')?.value
//       } ${this.update_student.get('home_region')?.value} ${
//         this.update_student.get('home_zip')?.value
//       }`
//     );
//     formData.append(
//       'present_address',
//       `${this.update_student.get('present_street')?.value} ${
//         this.update_student.get('present_barangay')?.value
//       } ${this.update_student.get('present_city')?.value} ${
//         this.update_student.get('present_province')?.value
//       } ${this.update_student.get('present_region')?.value} ${
//         this.update_student.get('present_zip')?.value
//       }`
//     );
//     formData.append(
//       'elem_school',
//       this.update_student.controls['elem_school'].value
//     );
//     formData.append(
//       'elem_year',
//       this.update_student.controls['elem_year'].value
//     );
//     formData.append(
//       'jhs_school',
//       this.update_student.controls['jhs_school'].value
//     );
//     formData.append('jhs_year', this.update_student.controls['jhs_year'].value);
//     formData.append(
//       'shs_school',
//       this.update_student.controls['shs_school'].value
//     );
//     formData.append(
//       'shs_year',
//       this.update_student.controls['shs_year'].value ?? ''
//     );
//     formData.append(
//       'last_school',
//       this.update_student.controls['last_school'].value ?? ''
//     );
//     formData.append(
//       'last_school_year',
//       this.update_student.controls['last_school_year'].value ?? ''
//     );
//     formData.append(
//       'father_name',
//       this.update_student.controls['father_name'].value ?? ''
//     );
//     formData.append(
//       'father_employed',
//       this.update_student.controls['father_employed'].value ?? ''
//     );
//     formData.append(
//       'father_occupation',
//       this.update_student.controls['father_occupation'].value ?? ''
//     );
//     formData.append(
//       'father_contact',
//       this.update_student.controls['father_contact'].value ?? ''
//     );
//     formData.append(
//       'mother_name',
//       this.update_student.controls['mother_name'].value ?? ''
//     );
//     formData.append(
//       'mother_employed',
//       this.update_student.controls['mother_employed'].value ?? ''
//     );
//     formData.append(
//       'mother_occupation',
//       this.update_student.controls['mother_occupation'].value ?? ''
//     );
//     formData.append(
//       'mother_contact',
//       this.update_student.controls['mother_contact'].value ?? ''
//     );
//     formData.append(
//       'guardian_name',
//       this.update_student.controls['guardian_name'].value ?? ''
//     );
//     formData.append(
//       'guardian_employed',
//       this.update_student.controls['guardian_employed'].value ?? ''
//     );
//     formData.append(
//       'guardian_occupation',
//       this.update_student.controls['guardian_occupation'].value ?? ''
//     );
//     formData.append(
//       'guardian_contact',
//       this.update_student.controls['guardian_contact'].value ?? ''
//     );
//     formData.append(
//       'profile',
//       this.update_student.controls['profile'].value ?? ''
//     );
//     formData.append(
//       'signature',
//       this.update_student.controls['signature'].value ?? ''
//     );
//     // console.log('FormData Entries:');
//     // formData.forEach((value, key) => {
//     //   console.log(`${key}: ${value}`);
//     // });

//     if (
//       this.update_student.controls['first_name'].invalid ||
//       this.update_student.controls['last_name'].invalid ||
//       this.update_student.controls['gender'].invalid ||
//       this.update_student.controls['civil_status'].invalid ||
//       this.update_student.controls['citizenship'].invalid ||
//       this.update_student.controls['religion'].invalid ||
//       this.update_student.controls['email'].invalid ||
//       this.update_student.controls['birth_date'].invalid ||
//       this.update_student.controls['home_street'].invalid ||
//       this.update_student.controls['home_barangay'].invalid ||
//       this.update_student.controls['home_province'].invalid ||
//       this.update_student.controls['home_region'].invalid ||
//       this.update_student.controls['home_zip'].invalid ||
//       this.update_student.controls['present_street'].invalid ||
//       this.update_student.controls['present_barangay'].invalid ||
//       this.update_student.controls['present_province'].invalid ||
//       this.update_student.controls['present_region'].invalid ||
//       this.update_student.controls['present_zip'].invalid ||
//       this.update_student.controls['elem_school'].invalid ||
//       this.update_student.controls['elem_year'].invalid ||
//       this.update_student.controls['jhs_school'].invalid ||
//       this.update_student.controls['jhs_year'].invalid ||
//       this.update_student.controls['shs_school'].invalid ||
//       this.update_student.controls['shs_year'].invalid ||
//       this.update_student.controls['last_school'].invalid ||
//       this.update_student.controls['last_school_year'].invalid ||
//       this.update_student.controls['profile'].invalid ||
//       this.update_student.controls['signature'].invalid
//     ) {
//       this.messageService.add({
//         severity: 'error',
//         summary: 'Required',
//         detail: 'Inputs With Aterisk are Required!',
//       });
//       return;
//     }

//     this.student.updateStudent(formData).subscribe({
//       next: () => {
//         setTimeout(() => {
//           this.messageService.add({
//             severity: 'success',
//             summary: 'Updated',
//             detail: 'Successfully!',
//           });
//         }, 1000);

//         this.router.navigate(['/student/information']);
//       },
//       error: () => {},
//     });
//   }

//   toggleMiddleName() {
//     this.noMiddleName = !this.noMiddleName;
//     const middleNameControl = this.update_student.get('middle_name');
//     if (this.noMiddleName) {
//       middleNameControl?.setValue('N/A');
//       middleNameControl?.disable();
//     } else {
//       middleNameControl?.setValue(null);
//       middleNameControl?.enable();
//     }
//   }

//   inputMask(event: Event) {
//     var numberValue = (event.target as HTMLSelectElement).value;

//     var numericRegex = /^[0-9]+$/;

//     if (!numericRegex.test(numberValue)) {
//       var sanitizedValue = numberValue.replace(/[^0-9]/g, '');

//       (event.target as HTMLSelectElement).value = sanitizedValue;
//     }
//   }

//   backClicked() {
//     this.location.back();
//   }
// }
