import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskFilterComponent } from './risk-filter.component';

describe('RiskFilterComponent', () => {
  let component: RiskFilterComponent;
  let fixture: ComponentFixture<RiskFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
