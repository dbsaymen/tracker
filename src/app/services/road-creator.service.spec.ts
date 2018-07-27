import { TestBed, inject } from '@angular/core/testing';

import { RoadCreatorService } from './road-creator.service';

describe('RoadCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoadCreatorService]
    });
  });

  it('should be created', inject([RoadCreatorService], (service: RoadCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
