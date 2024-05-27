import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCaeComponent } from './dept-cae.component';

describe('DeptCaeComponent', () => {
  let component: DeptCaeComponent;
  let fixture: ComponentFixture<DeptCaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptCaeComponent]
    });
    fixture = TestBed.createComponent(DeptCaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
