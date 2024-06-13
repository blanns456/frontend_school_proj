import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSignaturepadComponent } from './college-signaturepad.component';

describe('CollegeSignaturepadComponent', () => {
  let component: CollegeSignaturepadComponent;
  let fixture: ComponentFixture<CollegeSignaturepadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeSignaturepadComponent]
    });
    fixture = TestBed.createComponent(CollegeSignaturepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
