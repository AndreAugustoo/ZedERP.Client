import { TestBed } from '@angular/core/testing';

import { ToastSuccessService } from './toast-success.service';

describe('ToastSuccessService', () => {
  let service: ToastSuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastSuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
