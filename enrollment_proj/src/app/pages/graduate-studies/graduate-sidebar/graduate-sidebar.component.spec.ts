import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateSidebarComponent } from './graduate-sidebar.component';

describe('GraduateSidebarComponent', () => {
  let component: GraduateSidebarComponent;
  let fixture: ComponentFixture<GraduateSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateSidebarComponent]
    });
    fixture = TestBed.createComponent(GraduateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
