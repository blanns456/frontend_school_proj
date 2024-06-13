import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptShsComponent } from './dept-shs.component';

describe('DeptShsComponent', () => {
  let component: DeptShsComponent;
  let fixture: ComponentFixture<DeptShsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptShsComponent]
    });
    fixture = TestBed.createComponent(DeptShsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
