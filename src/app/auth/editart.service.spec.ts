import { TestBed } from '@angular/core/testing';

import { EditartService } from './editart.service';

describe('EditartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditartService = TestBed.get(EditartService);
    expect(service).toBeTruthy();
  });
});
