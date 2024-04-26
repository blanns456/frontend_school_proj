import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptCbaeComponent } from './dept-cbae.component';

describe('DeptCbaeComponent', () => {
  let component: DeptCbaeComponent;
  let fixture: ComponentFixture<DeptCbaeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptCbaeComponent]
    });
    fixture = TestBed.createComponent(DeptCbaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
