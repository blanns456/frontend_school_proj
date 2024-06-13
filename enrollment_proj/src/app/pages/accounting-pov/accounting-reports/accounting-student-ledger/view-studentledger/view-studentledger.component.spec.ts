import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentledgerComponent } from './view-studentledger.component';

describe('ViewStudentledgerComponent', () => {
  let component: ViewStudentledgerComponent;
  let fixture: ComponentFixture<ViewStudentledgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentledgerComponent]
    });
    fixture = TestBed.createComponent(ViewStudentledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
