import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReqsComponent } from './registration-reqs.component';

describe('RegistrationReqsComponent', () => {
  let component: RegistrationReqsComponent;
  let fixture: ComponentFixture<RegistrationReqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationReqsComponent]
    });
    fixture = TestBed.createComponent(RegistrationReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
