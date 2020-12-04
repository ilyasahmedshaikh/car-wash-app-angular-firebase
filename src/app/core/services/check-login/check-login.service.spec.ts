import { TestBed } from '@angular/core/testing';

import { CheckLoginService } from './check-login.service';

describe('CheckLoginService', () => {
  let service: CheckLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
