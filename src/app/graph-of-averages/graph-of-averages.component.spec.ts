import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOfAveragesComponent } from './graph-of-averages.component';

describe('GraphOfAveragesComponent', () => {
  let component: GraphOfAveragesComponent;
  let fixture: ComponentFixture<GraphOfAveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphOfAveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOfAveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
