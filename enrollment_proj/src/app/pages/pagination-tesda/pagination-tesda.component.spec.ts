import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTesdaComponent } from './pagination-tesda.component';

describe('PaginationTesdaComponent', () => {
  let component: PaginationTesdaComponent;
  let fixture: ComponentFixture<PaginationTesdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationTesdaComponent]
    });
    fixture = TestBed.createComponent(PaginationTesdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
