import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptElementaryComponent } from './dept-elementary.component';

describe('DeptElementaryComponent', () => {
  let component: DeptElementaryComponent;
  let fixture: ComponentFixture<DeptElementaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptElementaryComponent]
    });
    fixture = TestBed.createComponent(DeptElementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
