import { TestBed } from '@angular/core/testing';

import { LoginContGuard } from './login-cont.guard';

describe('LoginContGuard', () => {
  let guard: LoginContGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginContGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
