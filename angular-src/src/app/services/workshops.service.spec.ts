/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkshopsService } from './workshops.service';

describe('WorkshopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkshopsService]
    });
  });

  it('should ...', inject([WorkshopsService], (service: WorkshopsService) => {
    expect(service).toBeTruthy();
  }));
});
