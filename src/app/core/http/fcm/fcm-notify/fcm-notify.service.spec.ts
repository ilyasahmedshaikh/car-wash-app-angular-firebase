import { TestBed } from '@angular/core/testing';

import { FcmNotifyService } from './fcm-notify.service';

describe('FcmNotifyService', () => {
  let service: FcmNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcmNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
