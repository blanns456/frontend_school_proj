import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansSubjectlistComponent } from './deans-subjectlist.component';

describe('DeansSubjectlistComponent', () => {
  let component: DeansSubjectlistComponent;
  let fixture: ComponentFixture<DeansSubjectlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansSubjectlistComponent]
    });
    fixture = TestBed.createComponent(DeansSubjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
