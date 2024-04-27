import { TestBed } from '@angular/core/testing';

import { DeanServicesService } from './dean-services.service';

describe('DeanServicesService', () => {
  let service: DeanServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeanServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
