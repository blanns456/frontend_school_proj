import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCteComponent } from './dept-cte.component';

describe('DeptCteComponent', () => {
  let component: DeptCteComponent;
  let fixture: ComponentFixture<DeptCteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptCteComponent]
    });
    fixture = TestBed.createComponent(DeptCteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
