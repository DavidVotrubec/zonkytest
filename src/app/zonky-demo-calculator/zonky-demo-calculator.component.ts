import { Component } from '@angular/core';
import { Rating } from '../models';
import { MarketplaceService } from '../marketplace.service';
import { average } from '../../utils/math';
import { locale } from '../config';

@Component({
  selector: 'app-zonky-demo-calculator',
  templateUrl: './zonky-demo-calculator.component.html',
  styleUrls: ['./zonky-demo-calculator.component.css']
})
export class ZonkyDemoCalculatorComponent {

  isLoading = false;
  averageAmount: number = null;
  recordsCount = 0;
  currencyValue = '';

  // export for consumption in template
  locale = locale;

  constructor(
    private marketplaceService: MarketplaceService
  ) { }

  get showPlaceholder() {
    return !this.isLoading && this.averageAmount == null;
  }

  calculateAverageAmount(rating: Rating) {
    // Prevent duplicated requests
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this.marketplaceService.load(rating).subscribe(loans => {
      this.averageAmount = average(loans.map(l => l.amount));
      this.recordsCount = loans.length;
      this.currencyValue = loans.length > 0
        ? loans[0].currency
        : '';

      this.isLoading = false;
    }, err => {
      alert('Error loading data from Zonky');
      console.error('Error loading data from Zonky', err);
      this.averageAmount = 0;
      this.isLoading = false;
    });
  }

}
