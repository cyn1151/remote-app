import { TestBed } from '@angular/core/testing';
import { I18nInitService } from './i18n-init';

describe('I18nInit', () => {
  let service: I18nInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
