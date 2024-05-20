import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { LoginController } from 'src/app/controllers/login_controller.component';
import Region from 'src/assets/json/region.json';
import Province from 'src/assets/json/province.json';
import City from 'src/assets/json/city.json';
import Barangay from 'src/assets/json/barangay.json';
import SignaturePad from 'signature_pad';
import { MessageService } from 'primeng/api';
import { error } from 'jquery';
import { UpdateStudentServiceService } from 'src/app/services/update-student-service.service';
import nationalities from '../../../../assets/json/nationalities.json';
import religions from '../../../../assets/json/religions.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent {
  selectedPresentRegion: any;
  selectedPresentProvince: any;
  selectedPresentCity: any;
  selectedPresentBarangay: any;
  filteredPresentProvinces: any;
  filteredPresentCities: any;
  filteredPresentBarangays: any;
  imageURL: any;
  nationalitiesList: string[] = [];
  religionList: string[] = [];
  selectedCitizenship: any;
  selectedReligion: any;
  noMiddleName = false;

  onEdit() {
    throw new Error('Method not implemented.');
  }
  studentdata: any;
  civil_statusval: any;
  firstname: any;
  loaddetails = false;
  data: any;
  date: any;
  regions: any = Region;
  provinces: any = Province;
  city: any = City;
  barangay: any = Barangay;

  selectedRegion: any;
  filteredProvinces: any[] = [];
  selectedProvince: any;
  filteredCities: any[] = [];
  selectedCity: any;
  filteredBarangays: any[] = [];
  selectedBarangay: any;

  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  signatureImg!: string;
  @ViewChild('canvas') canvasEl!: ElementRef;
  constructor(
    private logincontroller: LoginController,
    private student: UpdateStudentServiceService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  onRegionChange(event: any) {
    const regionName = event.target.value;
    this.selectedRegion = this.regions.find((region: { region_name: any; }) => region.region_name === regionName);
    this.selectedProvince = null;
    this.selectedCity = null;
    this.selectedBarangay = null;

    // Filter provinces based on the selected region code
    if (this.selectedRegion) {
      this.filteredProvinces = this.provinces.filter((province: { region_code: any; }) => province.region_code === this.selectedRegion.region_code);
    } else {
      this.filteredProvinces = [];
    }
  }

  onProvinceChange(event: any) {
    const provinceName = event.target?.value;
    const selectedProvince = this.filteredProvinces.find(province => province.province_name === provinceName);
    if (selectedProvince) {
      // console.log("Selected Province:", selectedProvince);
      this.filteredCities = this.city.filter((city: { province_code: any; }) => city.province_code === selectedProvince.province_code);
      // console.log("Filtered Cities:", this.filteredCities);
      this.selectedCity = null;
      this.selectedBarangay = null;
    }
  }

  onCityChange(event: any) {
    const cityName = event.target?.value;
    this.selectedCity = this.filteredCities.find(city => city.city_name === cityName);
    if (this.selectedCity) {
      this.filteredBarangays = this.barangay.filter((barangay: { city_code: any; }) => barangay.city_code === this.selectedCity.city_code);
    } else {
      this.filteredBarangays = [];
    }
  }

  onPresentRegionChange(event: any) {
    const regionName = event.target.value;
    this.selectedPresentRegion = this.regions.find((region: { region_name: any; }) => region.region_name === regionName);
    this.selectedPresentProvince = null;
    this.selectedPresentCity = null;
    this.selectedPresentBarangay = null;

    if (this.selectedPresentRegion) {
      this.filteredPresentProvinces = this.provinces.filter((province: { region_code: any; }) => province.region_code === this.selectedPresentRegion.region_code);
    } else {
      this.filteredPresentProvinces = [];
    }
  }
  onPresentProvinceChange(event: any) {
    const provinceName = event.target?.value;
    const selectedProvince = this.filteredPresentProvinces.find((province: { province_name: any; }) => province.province_name === provinceName);
    if (selectedProvince) {
      this.filteredPresentCities = this.city.filter((city: { province_code: any; }) => city.province_code === selectedProvince.province_code);
      this.selectedPresentCity = null;
      this.selectedPresentBarangay = null;
    }
  }

  onPresentCityChange(event: any) {
    const cityName = event.target?.value;
    this.selectedPresentCity = this.filteredPresentCities.find((city: { city_name: any; }) => city.city_name === cityName);
    if (this.selectedPresentCity) {
      this.filteredPresentBarangays = this.barangay.filter((barangay: { city_code: any; }) => barangay.city_code === this.selectedPresentCity.city_code);
    } else {
      this.filteredPresentBarangays = [];
    }
  }

  ngOnInit(): void {
    this.nationalitiesList = nationalities;
    this.religionList = religions;
    this.regions;

    this.selectedCitizenship = this.update_student.get('citizenship')?.value;
    this.selectedReligion = this.update_student.get('citizenship')?.value;
    // console.log(this.regions);

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.http.get(this.logincontroller.Root_URL + 'info-student', { headers: headers })
      .subscribe({
        next: (res: any) => {
          this.data = res[0][0];
          // this.date = new Date(this.data.birthdate);

          this.update_student.patchValue({
            firstname: this.data.firstname,
            lastname: this.data.lastname,
            middlename: this.data.middlename,
            gender: this.data.gender,
            email: this.data.email_address,
            birthdate: this.data.birthdate,
            citizenship: this.data.citizenship,
            religion: this.data.religion,
            contact_number: this.data.contact_number,
            civil_status: this.data.civil_status,
            birth_place: this.data.birth_place,
            elem_school: this.data.elem_school,
            elem_yr: this.data.elem_yr,
            jhs_school: this.data.jhs_school,
            jhs_yr: this.data.jhs_yr,
            shs_school: this.data.shs_school,
            shs_yr: this.data.shs_yr,
            last_school: this.data.last_school,
            last_school_year: this.data.last_school_year,
            father_name: this.data.father_name,
            father_employed: this.data.father_employed,
            father_occupation: this.data.father_occupation,
            father_contact: this.data.father_contact,
            mother_name: this.data.mother_name,
            mother_employed: this.data.mother_employed,
            mother_occupation: this.data.mother_occupation,
            mother_contact: this.data.mother_contact,
            guardian_name: this.data.guardian_name,
            guardian_employed: this.data.guardian_employed,
            guardian_occupation: this.data.guardian_occupation,
            guardian_contact: this.data.guardian_contact,
          });
        },
        error: (error: any) => {
          // console.error('Error:', error);
        }
      });

  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  update_student: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    middlename: new FormControl(
      {
        value: this.noMiddleName ? 'N/A' : null,
        disabled: this.noMiddleName,
      },
      Validators.required
    ),
    lastname: ['', [Validators.required]],
    suffix: [''],
    gender: ['', [Validators.required]],
    civil_status: ['', [Validators.required]],
    birth_place: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    religion: ['', [Validators.required]],
    citizenship: ['', [Validators.required]],
    contact_number: ['', [Validators.required]],
    email: ['', [Validators.required]],
    home_address: ['', [Validators.required]],
    present_address: ['', [Validators.required]],
    elem_school: ['', [Validators.required]],
    elem_yr: ['', [Validators.required]],
    jhs_school: ['', [Validators.required]],
    jhs_yr: ['', [Validators.required]],
    shs_school: ['', [Validators.required]],
    shs_yr: ['', [Validators.required]],
    last_school: ['', [Validators.required]],
    last_school_year: ['', [Validators.required]],
    father_name: [''],
    father_employed: [''],
    father_occupation: [''],
    father_contact: [''],
    mother_name: [''],
    mother_employed: [''],
    mother_occupation: [''],
    mother_contact: [''],
    guardian_name: [''],
    guardian_employed: [''],
    guardian_occupation: [''],
    guardian_contact: [''],
    home_region: ['', [Validators.required]],
    home_province: ['', [Validators.required]],
    home_city: ['', [Validators.required]],
    home_barangay: ['', [Validators.required]],
    home_street: ['', [Validators.required]],
    home_zip: ['', [Validators.required]],
    present_region: ['', [Validators.required]],
    present_province: ['', [Validators.required]],
    present_city: ['', [Validators.required]],
    present_barangay: ['', [Validators.required]],
    present_street: ['', [Validators.required]],
    present_zip: ['', [Validators.required]],
    profile: ['', [Validators.required]],
    signature: ['', [Validators.required]],
    new_password: ['', [Validators.required]],
  });

  showPreview(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.update_student.patchValue({
        profile: file,
      });
    }
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
  }

  moved(event: Event) {
  }

  clearPad() {
    this.signaturePad.clear();
  }


  update() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.signatureNeeded = this.signaturePad.isEmpty();
    if (!this.signatureNeeded) {
      this.signatureNeeded = false;
    }

    this.update_student.patchValue({
      signature: this.signatureImg,
    });

    const formData = new FormData();

    formData.append('firstname', this.update_student.controls['firstname'].value);
    formData.append('middlename', this.update_student.controls['shs_yr'].value ?? '');
    if (this.update_student.controls['middlename'].value === 'N/A') {
      formData.append('middlename', '');

    } else {
      formData.append('middlename', this.update_student.controls['middlename'].value ?? '');
    }
    formData.append('lastname', this.update_student.controls['lastname'].value);
    formData.append('suffix', this.update_student.controls['suffix'].value);
    formData.append('gender', this.update_student.controls['gender'].value);
    formData.append('civil_status', this.update_student.controls['civil_status'].value);
    formData.append('citizenship', this.update_student.controls['citizenship'].value);
    formData.append('religion', this.update_student.controls['religion'].value);
    formData.append('contact_number', this.update_student.controls['contact_number'].value);
    formData.append('email', this.update_student.controls['email'].value);
    formData.append('birthdate', this.update_student.controls['birthdate'].value);
    formData.append('birth_place', this.update_student.controls['birth_place'].value);
    formData.append('home_address', `${this.update_student.controls['home_street'].value} ${this.update_student.controls['home_barangay'].value} ${this.update_student.controls['home_city'].value} ${this.update_student.controls['home_province'].value} ${this.update_student.controls['home_region'].value} ${this.update_student.controls['home_zip'].value}`);
    formData.append('present_address', `${this.update_student.controls['present_street'].value} ${this.update_student.controls['present_barangay'].value} ${this.update_student.controls['present_city'].value} ${this.update_student.controls['present_province'].value} ${this.update_student.controls['present_region'].value} ${this.update_student.controls['present_zip'].value}`);
    formData.append('elem_school', this.update_student.controls['elem_school'].value);
    formData.append('elem_yr', this.update_student.controls['elem_yr'].value);
    formData.append('jhs_school', this.update_student.controls['jhs_school'].value);
    formData.append('jhs_yr', this.update_student.controls['jhs_yr'].value);
    formData.append('shs_school', this.update_student.controls['shs_school'].value);
    formData.append('shs_yr', this.update_student.controls['shs_yr'].value ?? '');
    formData.append('last_school', this.update_student.controls['last_school'].value ?? '');
    formData.append('last_school_year', this.update_student.controls['last_school_year'].value ?? '');
    formData.append('father_name', this.update_student.controls['father_name'].value ?? '');
    formData.append('father_employed', this.update_student.controls['father_employed'].value ?? '');
    formData.append('father_occupation', this.update_student.controls['father_occupation'].value ?? '');
    formData.append('father_contact', this.update_student.controls['father_contact'].value ?? '');
    formData.append('mother_name', this.update_student.controls['mother_name'].value ?? '');
    formData.append('mother_employed', this.update_student.controls['mother_employed'].value ?? '');
    formData.append('mother_occupation', this.update_student.controls['mother_occupation'].value ?? '');
    formData.append('mother_contact', this.update_student.controls['mother_contact'].value ?? '');
    formData.append('guardian_name', this.update_student.controls['guardian_name'].value ?? '');
    formData.append('guardian_employed', this.update_student.controls['guardian_employed'].value ?? '');
    formData.append('guardian_occupation', this.update_student.controls['guardian_occupation'].value ?? '');
    formData.append('guardian_contact', this.update_student.controls['guardian_contact'].value ?? '');
    formData.append('profile', this.update_student.controls['profile'].value ?? '');
    formData.append('signature', this.update_student.controls['signature'].value ?? '');
    formData.append('new_password', this.update_student.controls['new_password'].value);

    if (
      this.update_student.controls['firstname'].invalid ||
      this.update_student.controls['lastname'].invalid ||
      this.update_student.controls['gender'].invalid ||
      this.update_student.controls['civil_status'].invalid ||
      this.update_student.controls['citizenship'].invalid ||
      this.update_student.controls['religion'].invalid ||
      this.update_student.controls['email'].invalid ||
      this.update_student.controls['birthdate'].invalid ||
      this.update_student.controls['home_street'].invalid ||
      this.update_student.controls['home_barangay'].invalid ||
      this.update_student.controls['home_province'].invalid ||
      this.update_student.controls['home_region'].invalid ||
      this.update_student.controls['home_zip'].invalid ||
      this.update_student.controls['present_street'].invalid ||
      this.update_student.controls['present_barangay'].invalid ||
      this.update_student.controls['present_province'].invalid ||
      this.update_student.controls['present_region'].invalid ||
      this.update_student.controls['present_zip'].invalid ||
      this.update_student.controls['elem_school'].invalid ||
      this.update_student.controls['elem_yr'].invalid ||
      this.update_student.controls['jhs_school'].invalid ||
      this.update_student.controls['jhs_yr'].invalid ||
      this.update_student.controls['shs_school'].invalid ||
      this.update_student.controls['shs_yr'].invalid ||
      this.update_student.controls['last_school'].invalid ||
      this.update_student.controls['last_school_year'].invalid ||
      this.update_student.controls['profile'].invalid ||
      this.update_student.controls['new_password'].invalid ||
      this.update_student.controls['signature'].invalid
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Required',
        detail: 'Inputs With Aterisk are Required!',
      });
      return;
    }

    this.student.updateStudent(formData).subscribe({
      next: (response) => {
        // Handle the response data
        // console.log(response);

        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Successfully!',
          });
        }, 5000);

        this.router.navigate(['/student/information']);
      },
      error: (error) => {
        // Handle the error
        // console.log(error);
      },
    });
  }

  toggleMiddleName() {
    this.noMiddleName = !this.noMiddleName;
    const middleNameControl = this.update_student.get('middlename');
    if (this.noMiddleName) {
      middleNameControl?.setValue('N/A');
      middleNameControl?.disable();
    } else {
      middleNameControl?.setValue(null);
      middleNameControl?.enable();
    }
  }

  inputMask(event: Event) {
    var numberValue = (event.target as HTMLSelectElement).value;

    var numericRegex = /^[0-9]+$/;

    if (!numericRegex.test(numberValue)) {
      var sanitizedValue = numberValue.replace(/[^0-9]/g, '');

      (event.target as HTMLSelectElement).value = sanitizedValue;

      // console.log('Invalid input. Please enter only numeric values.');
    }
  }
}
