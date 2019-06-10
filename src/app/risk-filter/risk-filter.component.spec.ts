import { Spectator, createTestComponentFactory } from '@netbasal/spectator';
import { RiskFilterComponent } from './risk-filter.component';

describe('RiskFilterComponent', () => {

  let spectator: Spectator<RiskFilterComponent>;
  const createComponent = createTestComponentFactory(RiskFilterComponent);

  // Create fresh instance of component
  beforeEach(() => {
    spectator = createComponent();
  });

  it('should contain buttons for calculation of average - 1 for each rating', () => {
    const buttons = spectator.queryAll('button');
    expect(buttons.length).toEqual(11);
  });

  it('should call a select function button when was clicked', () => {
    const button = spectator.query('button');
    const clickEvent = new MouseEvent('click');

    // Create method spy
    spyOn(spectator.component, 'select').and.returnValue(null);

    button.dispatchEvent(clickEvent);
    spectator.detectChanges();

    expect(spectator.component.select).toHaveBeenCalled();
  });
});
