import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './base.service';

describe('BaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
