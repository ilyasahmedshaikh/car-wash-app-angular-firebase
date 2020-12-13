import { TestBed } from '@angular/core/testing';

import { GetStatusDescriptionService } from './get-status-description.service';

describe('GetStatusDescriptionService', () => {
  let service: GetStatusDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatusDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
