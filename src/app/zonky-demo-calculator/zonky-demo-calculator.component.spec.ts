import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonkyDemoCalculatorComponent } from './zonky-demo-calculator.component';
import { MarketplaceService } from '../marketplace.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({selector: 'app-risk-filter', template: ''})
// class RiskFilterStubComponent {}

describe('ZonkyDemoCalculatorComponent', () => {
  let component: ZonkyDemoCalculatorComponent;
  let fixture: ComponentFixture<ZonkyDemoCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MarketplaceService],
      declarations: [
        ZonkyDemoCalculatorComponent,
        // RiskFilterStubComponent
       ],
       schemas: [ NO_ERRORS_SCHEMA ]
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
