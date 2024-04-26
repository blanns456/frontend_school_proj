import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptUi01Component } from './dept-ui01.component';

describe('DeptUi01Component', () => {
  let component: DeptUi01Component;
  let fixture: ComponentFixture<DeptUi01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptUi01Component]
    });
    fixture = TestBed.createComponent(DeptUi01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
