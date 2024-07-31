import { TestBed } from '@angular/core/testing';

import { CloseModalService } from './close-modal.service';

describe('CloseModalService', () => {
  let service: CloseModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
