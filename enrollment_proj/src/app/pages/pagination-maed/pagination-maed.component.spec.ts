import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMaedComponent } from './pagination-maed.component';

describe('PaginationMaedComponent', () => {
  let component: PaginationMaedComponent;
  let fixture: ComponentFixture<PaginationMaedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationMaedComponent]
    });
    fixture = TestBed.createComponent(PaginationMaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
