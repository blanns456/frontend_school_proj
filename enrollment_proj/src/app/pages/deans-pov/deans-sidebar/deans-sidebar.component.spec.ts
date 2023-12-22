import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansSidebarComponent } from './deans-sidebar.component';

describe('DeansSidebarComponent', () => {
  let component: DeansSidebarComponent;
  let fixture: ComponentFixture<DeansSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansSidebarComponent]
    });
    fixture = TestBed.createComponent(DeansSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
