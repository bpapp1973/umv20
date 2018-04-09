import { TestBed, inject } from '@angular/core/testing';

import { CarsDataService } from './cars-data.service';

describe('CarsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsDataService]
    });
  });

  it('should be created', inject([CarsDataService], (service: CarsDataService) => {
    expect(service).toBeTruthy();
  }));
});
