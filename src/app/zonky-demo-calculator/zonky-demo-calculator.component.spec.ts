import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonkyDemoCalculatorComponent } from './zonky-demo-calculator.component';

describe('ZonkyDemoCalculatorComponent', () => {
  let component: ZonkyDemoCalculatorComponent;
  let fixture: ComponentFixture<ZonkyDemoCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonkyDemoCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonkyDemoCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
