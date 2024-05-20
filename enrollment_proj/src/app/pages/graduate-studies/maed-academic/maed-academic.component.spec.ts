import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedAcademicComponent } from './maed-academic.component';

describe('MaedAcademicComponent', () => {
  let component: MaedAcademicComponent;
  let fixture: ComponentFixture<MaedAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedAcademicComponent]
    });
    fixture = TestBed.createComponent(MaedAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
