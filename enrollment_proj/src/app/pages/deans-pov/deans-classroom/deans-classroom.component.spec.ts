import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansClassroomComponent } from './deans-classroom.component';

describe('DeansClassroomComponent', () => {
  let component: DeansClassroomComponent;
  let fixture: ComponentFixture<DeansClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansClassroomComponent]
    });
    fixture = TestBed.createComponent(DeansClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
