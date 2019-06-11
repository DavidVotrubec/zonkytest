import { ZonkyDemoCalculatorComponent } from './zonky-demo-calculator.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { MockComponent } from 'ng-mocks';
import { HttpClientModule } from '@angular/common/http';
import { GraphOfAveragesComponent } from '../graph-of-averages/graph-of-averages.component';
import { RiskFilterComponent } from '../risk-filter/risk-filter.component';

import { registerLocaleData } from '@angular/common';
import localeCzech from '@angular/common/locales/cs';
registerLocaleData(localeCzech, 'cs');
import { LOCALE_ID } from '@angular/core';

describe('ZonkyDemoCalculatorComponent', () => {
  let spectator: Spectator<ZonkyDemoCalculatorComponent>;

  const createComponent = createTestComponentFactory({
    component: ZonkyDemoCalculatorComponent,
    imports: [HttpClientModule],
    providers: [
      HttpClientModule,
      { provide: LOCALE_ID, useValue: 'cs'},
    ],
    declarations: [
      MockComponent(GraphOfAveragesComponent),
      MockComponent(RiskFilterComponent)
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should show results when they arrive', () => {
    let results = spectator.query('.results');
    expect(results).toBeFalsy();

    spectator.component.averageAmount = 1123465;
    spectator.component.recordsCount = 20;
    spectator.component.isLoading = false;
    spectator.detectChanges();

    results = spectator.query('.results');
    expect(results).toBeTruthy();
  });
});
