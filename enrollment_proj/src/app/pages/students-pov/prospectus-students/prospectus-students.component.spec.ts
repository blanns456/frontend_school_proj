import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectusStudentsComponent } from './prospectus-students.component';

describe('ProspectusStudentsComponent', () => {
  let component: ProspectusStudentsComponent;
  let fixture: ComponentFixture<ProspectusStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProspectusStudentsComponent]
    });
    fixture = TestBed.createComponent(ProspectusStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
