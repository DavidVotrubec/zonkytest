import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Rating } from '../models';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'app-risk-filter',
  templateUrl: './risk-filter.component.html',
  styleUrls: ['./risk-filter.component.scss']
})
export class RiskFilterComponent implements OnInit, OnChanges {

  @Input()
  public disabled = false;

  @Output()
  changedRisk = new EventEmitter<Rating>();

  public ratings: Rating[];

  constructor(
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
    this.ratings = this.ratingsService.getRatings();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('disabled') && changes['disabled'].currentValue === true) {

    }
  }

  select(rating: Rating): void {
    this.changedRisk.emit(rating);
  }

}
