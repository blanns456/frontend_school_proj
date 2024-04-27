import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptTvetComponent } from './dept-tvet.component';

describe('DeptTvetComponent', () => {
  let component: DeptTvetComponent;
  let fixture: ComponentFixture<DeptTvetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptTvetComponent]
    });
    fixture = TestBed.createComponent(DeptTvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
