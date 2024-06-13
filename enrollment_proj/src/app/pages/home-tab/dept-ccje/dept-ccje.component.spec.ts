import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCcjeComponent } from './dept-ccje.component';

describe('DeptCcjeComponent', () => {
  let component: DeptCcjeComponent;
  let fixture: ComponentFixture<DeptCcjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptCcjeComponent]
    });
    fixture = TestBed.createComponent(DeptCcjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
