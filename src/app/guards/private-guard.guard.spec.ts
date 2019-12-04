import { TestBed, async, inject } from '@angular/core/testing';

import { PrivateGuardGuard } from './private-guard.guard';

describe('PrivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateGuardGuard]
    });
  });

  it('should ...', inject([PrivateGuardGuard], (guard: PrivateGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
