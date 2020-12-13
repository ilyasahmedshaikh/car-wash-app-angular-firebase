import { TestBed } from '@angular/core/testing';

import { FcmConfigService } from './fcm-config.service';

describe('FcmConfigService', () => {
  let service: FcmConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcmConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
