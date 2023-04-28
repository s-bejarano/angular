import { TestBed } from '@angular/core/testing';

import { SalidaFormulariosGuard } from './salida-formularios.guard';

describe('SalidaFormulariosGuard', () => {
  let guard: SalidaFormulariosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalidaFormulariosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
