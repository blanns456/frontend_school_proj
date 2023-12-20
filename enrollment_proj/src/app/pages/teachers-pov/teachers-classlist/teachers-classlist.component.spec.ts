import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersClasslistComponent } from './teachers-classlist.component';

describe('TeachersClasslistComponent', () => {
  let component: TeachersClasslistComponent;
  let fixture: ComponentFixture<TeachersClasslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersClasslistComponent]
    });
    fixture = TestBed.createComponent(TeachersClasslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
