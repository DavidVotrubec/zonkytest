import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MarketplaceService } from './marketplace.service';

describe('MarketplaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MarketplaceService = TestBed.get(MarketplaceService);
    expect(service).toBeTruthy();
  });
});
