/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComprarDivisaService } from './comprarDivisa.service';

describe('Service: ComprarDivisa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComprarDivisaService]
    });
  });

  it('should ...', inject([ComprarDivisaService], (service: ComprarDivisaService) => {
    expect(service).toBeTruthy();
  }));
});
