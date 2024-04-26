import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCceComponent } from './dept-cce.component';

describe('DeptCceComponent', () => {
  let component: DeptCceComponent;
  let fixture: ComponentFixture<DeptCceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptCceComponent]
    });
    fixture = TestBed.createComponent(DeptCceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
