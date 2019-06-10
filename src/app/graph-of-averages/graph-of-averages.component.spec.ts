import { HttpClientModule } from '@angular/common/http';
import { GraphOfAveragesComponent } from './graph-of-averages.component';
import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { MockComponent } from 'ng-mocks';
import { HighchartsChartComponent } from 'highcharts-angular';

describe('GraphOfAveragesComponent', () => {
  let spectator: Spectator<GraphOfAveragesComponent>;

  const createComponent = createTestComponentFactory({
    component: GraphOfAveragesComponent,
    imports: [HttpClientModule],
    providers: [HttpClientModule],
    declarations: [MockComponent(HighchartsChartComponent)]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should disable button when clicked', () => {
    let button = spectator.query('button');
    expect(button.hasAttribute('disabled')).toBeFalsy();

    button.dispatchEvent(new MouseEvent('click'));
    spectator.detectChanges();

    // Re-select the button, so I have up-to-date values
    button = spectator.query('button');
    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('should invoke method when button is clicked', () => {
    const button = spectator.query('button');
    spyOn(spectator.component, 'calculateAllAverages');

    button.dispatchEvent(new MouseEvent('click'));
    spectator.detectChanges();

    expect(spectator.component.calculateAllAverages).toHaveBeenCalled();
  });

  it('should emit event when loading starts', () => {
    const button = spectator.query('button');
    spyOn(spectator.component.loadingInProgress, 'emit');

    button.dispatchEvent(new MouseEvent('click'));
    spectator.detectChanges();

    expect(spectator.component.loadingInProgress.emit).toHaveBeenCalled();
  })
});
