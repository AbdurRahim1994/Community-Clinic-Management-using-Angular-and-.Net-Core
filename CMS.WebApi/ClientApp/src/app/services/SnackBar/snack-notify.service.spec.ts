import { TestBed } from '@angular/core/testing';

import { SnackNotifyService } from './snack-notify.service';

describe('SnackNotifyService', () => {
  let service: SnackNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
