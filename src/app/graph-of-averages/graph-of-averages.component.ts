import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { average } from '../../utils/math';
import { RatingsService } from '../ratings.service';
import { MarketplaceService } from '../marketplace.service';
import { Rating } from '../models';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-of-averages',
  templateUrl: './graph-of-averages.component.html',
  styleUrls: ['./graph-of-averages.component.css']
})
export class GraphOfAveragesComponent implements OnInit {

  isLoading = false;
  errorMessage = '';
  graphData: Array<{rating: Rating, avg: number}> = [];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = null;
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false

  constructor(
    private marketplaceService: MarketplaceService,
    private ratingsService: RatingsService
  ) { }

  ngOnInit() {
  }

  calculateAllAverages() {
    // Prevent duplicated requests
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const allRatings = this.ratingsService.getRatings();

    // TODO: Refactor to something nicer
    // Fire requests for all the ratings
    // and wait for results to arrive or error
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
    }, err => {
      this.isLoading = false;
      this.errorMessage = 'Loading data for one or more ratings failed. Please try again.';
      console.error(err);
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
