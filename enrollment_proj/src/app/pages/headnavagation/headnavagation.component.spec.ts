import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnavagationComponent } from './headnavagation.component';

describe('HeadnavagationComponent', () => {
  let component: HeadnavagationComponent;
  let fixture: ComponentFixture<HeadnavagationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadnavagationComponent]
    });
    fixture = TestBed.createComponent(HeadnavagationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
