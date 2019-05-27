import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Rating } from '../models';

@Component({
  selector: 'app-risk-filter',
  templateUrl: './risk-filter.component.html',
  styleUrls: ['./risk-filter.component.css']
})
export class RiskFilterComponent implements OnInit {

  @Input()
  disabled = false;

  @Output()
  changedRisk = new EventEmitter<Rating>();

  // TODO: This could be coming from some service
  // Not hard coded here
  ratings: Array<Rating> = [
    {
      title: 'AAAAAA',
      percentile: 2.99
    },
    {
      title: 'AAAAA',
      percentile: 3.99
    },
    {
      title: 'AAAA',
      percentile: 4.99
    },
    {
      title: 'AAA',
      percentile: 5.99
    },
    {
      title: 'AAE',
      percentile: 6.99
    },
    {
      title: 'AA',
      percentile: 8.49
    },
    {
      title: 'AE',
      percentile: 9.49
    },
    {
      title: 'A',
      percentile: 10.99
    },
    {
      title: 'B',
      percentile: 13.49
    },
    {
      title: 'C',
      percentile: 15.49
    },
    {
      title: 'D',
      percentile: 19.99
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  select(rating: Rating): void {
    this.changedRisk.emit(rating);
  }
}
