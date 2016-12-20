/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntrepriseService } from './entreprise.service';

describe('Service: Entreprise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrepriseService]
    });
  });

  it('should ...', inject([EntrepriseService], (service: EntrepriseService) => {
    expect(service).toBeTruthy();
  }));
});
