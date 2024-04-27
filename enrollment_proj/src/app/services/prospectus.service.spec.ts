import { TestBed } from '@angular/core/testing';

import { ProspectusService } from './prospectus.service';

describe('ProspectusService', () => {
  let service: ProspectusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspectusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
