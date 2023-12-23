import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBySubjectComponent } from './count-by-subject.component';

describe('CountBySubjectComponent', () => {
  let component: CountBySubjectComponent;
  let fixture: ComponentFixture<CountBySubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountBySubjectComponent]
    });
    fixture = TestBed.createComponent(CountBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
