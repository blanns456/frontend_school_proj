import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationShsComponent } from './pagination-shs.component';

describe('PaginationShsComponent', () => {
  let component: PaginationShsComponent;
  let fixture: ComponentFixture<PaginationShsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationShsComponent]
    });
    fixture = TestBed.createComponent(PaginationShsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
