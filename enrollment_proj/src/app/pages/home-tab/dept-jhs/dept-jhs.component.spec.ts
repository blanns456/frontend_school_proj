import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptJhsComponent } from './dept-jhs.component';

describe('DeptJhsComponent', () => {
  let component: DeptJhsComponent;
  let fixture: ComponentFixture<DeptJhsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptJhsComponent]
    });
    fixture = TestBed.createComponent(DeptJhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
