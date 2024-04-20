import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanMainComponent } from './dean-main.component';

describe('DeanMainComponent', () => {
  let component: DeanMainComponent;
  let fixture: ComponentFixture<DeanMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeanMainComponent]
    });
    fixture = TestBed.createComponent(DeanMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
