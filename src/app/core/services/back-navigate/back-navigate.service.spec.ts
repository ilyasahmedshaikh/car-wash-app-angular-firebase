import { TestBed } from '@angular/core/testing';

import { BackNavigateService } from './back-navigate.service';

describe('BackNavigateService', () => {
  let service: BackNavigateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackNavigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
