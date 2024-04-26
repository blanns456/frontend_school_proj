import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutascComponent } from './aboutasc.component';

describe('AboutascComponent', () => {
  let component: AboutascComponent;
  let fixture: ComponentFixture<AboutascComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutascComponent]
    });
    fixture = TestBed.createComponent(AboutascComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
