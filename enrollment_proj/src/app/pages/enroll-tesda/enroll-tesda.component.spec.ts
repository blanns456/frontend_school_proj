import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTesdaComponent } from './enroll-tesda.component';

describe('EnrollTesdaComponent', () => {
  let component: EnrollTesdaComponent;
  let fixture: ComponentFixture<EnrollTesdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollTesdaComponent]
    });
    fixture = TestBed.createComponent(EnrollTesdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
