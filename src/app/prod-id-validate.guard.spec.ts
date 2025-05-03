import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { prodIdValidateGuard } from './prod-id-validate.guard';

describe('prodIdValidateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => prodIdValidateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
