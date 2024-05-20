import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedEnrollmentComponent } from './maed-enrollment.component';

describe('MaedEnrollmentComponent', () => {
  let component: MaedEnrollmentComponent;
  let fixture: ComponentFixture<MaedEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedEnrollmentComponent]
    });
    fixture = TestBed.createComponent(MaedEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
