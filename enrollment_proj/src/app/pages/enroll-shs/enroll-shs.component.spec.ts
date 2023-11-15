import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollShsComponent } from './enroll-shs.component';

describe('EnrollShsComponent', () => {
  let component: EnrollShsComponent;
  let fixture: ComponentFixture<EnrollShsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollShsComponent]
    });
    fixture = TestBed.createComponent(EnrollShsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
