import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficiallyEnrolledComponent } from './officially-enrolled.component';

describe('OfficiallyEnrolledComponent', () => {
  let component: OfficiallyEnrolledComponent;
  let fixture: ComponentFixture<OfficiallyEnrolledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficiallyEnrolledComponent]
    });
    fixture = TestBed.createComponent(OfficiallyEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
