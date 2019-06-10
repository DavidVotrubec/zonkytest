import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { forkJoin } from 'rxjs';
import { average } from '../../utils/math';
import { RatingsService } from '../ratings.service';
import { MarketplaceService } from '../marketplace.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-of-averages',
  templateUrl: './graph-of-averages.component.html',
  styleUrls: ['./graph-of-averages.component.css']
})
export class GraphOfAveragesComponent {

  isLoading = false;
  displayGraph = false;

  @Input()
  disabled = false;

  // Notify parent component
  @Output()
  loadingInProgress = new EventEmitter<boolean>();

  @Output()
  loadingError = new EventEmitter<string>();

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor = 'chart';
  chartOptions: Highcharts.Options = null;

  constructor(
    private marketplaceService: MarketplaceService,
    private ratingsService: RatingsService
  ) { }

  calculateAllAverages() {
    // Prevent duplicated requests
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.displayGraph = false;
    this.loadingInProgress.emit(true);

    const allRatings = this.ratingsService.getRatings();

    // Fire requests for all the ratings and wait for results to arrive or error
    forkJoin(
      allRatings.map(rating => this.marketplaceService.load(rating))
    )
    .subscribe(allLoansForRating => {

      // Extract the averages
      const rawGraphData = allLoansForRating.map(loansPerRating => {
        return average(loansPerRating.map(loan => loan.amount));
      });

      const categories = this.ratingsService.getRatings().map(x => x.title);
      this.chartOptions = this.getGraphConfig(categories, rawGraphData);
      this.isLoading = false;
      this.displayGraph = true;
      this.loadingInProgress.emit(false);
    }, err => {
      this.isLoading = false;
      console.error(err);
      this.displayGraph = false;
      this.loadingInProgress.emit(false);
      this.loadingError.emit('Loading data for one or more ratings failed. Please try again, this is most likely proxy error.');
    });
  }

  private getGraphConfig(categories: Array<string>, values: Array<number>): Highcharts.Options {
    return {
      title: {
        text: 'Average amount of loans per rating',
      },
      xAxis: {
        categories
      },
      yAxis: {
        title: {
            text: 'Average amount in CZK'
        }
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
    },
    series: [
      {
        name: 'Ratings',
        type: 'line',
        data: values
      }
    ]
    };
  }
}
