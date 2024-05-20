import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedCoursesComponent } from './maed-courses.component';

describe('MaedCoursesComponent', () => {
  let component: MaedCoursesComponent;
  let fixture: ComponentFixture<MaedCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedCoursesComponent]
    });
    fixture = TestBed.createComponent(MaedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
