import { TestBed } from '@angular/core/testing';

import { PhysicalCheckUpService } from './physical-check-up.service';

describe('PhysicalCheckUpService', () => {
  let service: PhysicalCheckUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicalCheckUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
