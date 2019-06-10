import { Component } from '@angular/core';
import { Rating } from '../models';
import { MarketplaceService } from '../marketplace.service';
import { average } from '../../utils/math';
import { locale } from '../config';
import { RatingsService } from '../ratings.service';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-zonky-demo-calculator',
  templateUrl: './zonky-demo-calculator.component.html',
  styleUrls: ['./zonky-demo-calculator.component.css']
})
export class ZonkyDemoCalculatorComponent {

  isLoading = false;
  errorMessage = '';
  averageAmount: number = null;
  recordsCount = 0;
  currencyValue = '';

  // export for consumption in template
  locale = locale;

  constructor(
    private marketplaceService: MarketplaceService,
    private ratingsService: RatingsService
  ) { }

  calculateAverageAmount(rating: Rating) {
    // Prevent duplicated requests
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.marketplaceService.load(rating).subscribe(loans => {
      this.averageAmount = average(loans.map(l => l.amount));
      this.recordsCount = loans.length;
      this.currencyValue = loans.length > 0
        ? loans[0].currency
        : '';

      this.isLoading = false;
    }, err => {
      this.errorMessage = 'Error loading data from Zonky';
      console.error('Error loading data from Zonky', err);
      this.averageAmount = 0;
      this.isLoading = false;
    });
  }

  calculateAllAverages() {
    // Prevent duplicated requests
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const allRatings = this.ratingsService.getRatings();

    // Fire requests for all the ratings
    // and wait for results to arrive or error
    forkJoin(allRatings.map(rating => this.marketplaceService.load(rating)))
    // .pipe(
    //   mergeMap((x) => {
    //     debugger
    //     const avg = average(x.map(l => l.amount));
    //     return avg;
    //   })
    // )
    .subscribe(allLoansForRating => {
      const graphData = allLoansForRating.map((loansPerRating, index) => {
        const avg = average(loansPerRating.map(loan => loan.amount));
        return {
          rating: allRatings[index],
          avg
        };
      });
      debugger;

      this.isLoading = false;

    }, err => {
      this.isLoading = false;
      this.errorMessage = 'Loading data for one or more ratings failed';
      console.error(err);
    });
  }

}
