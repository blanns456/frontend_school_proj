import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooternavigationComponent } from './footernavigation.component';

describe('FooternavigationComponent', () => {
  let component: FooternavigationComponent;
  let fixture: ComponentFixture<FooternavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooternavigationComponent]
    });
    fixture = TestBed.createComponent(FooternavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
