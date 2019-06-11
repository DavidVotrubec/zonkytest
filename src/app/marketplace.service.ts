import { Injectable } from '@angular/core';
import { Rating, Loan } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  apiNamespace = 'loans/marketplace';

  constructor(
    public http: HttpClient
  ) {
  }

  load(rating: Rating): Observable<Loan[]> {
    let url = this.composeUrl();
    url += '?rating__in=' + this.encodeRatings([rating]); // Required for cors.io
    // url += '?rating__in=' + [rating];
    // url += `?rating__in=[${rating.title}]`;

    // Unfortunately the custom headers for paging are stripped away by proxy
    const headers = new HttpHeaders({
      'X-Page': '0',
      'X-Size': '50'
    });

    // url = encodeURIComponent(url); compatible with https://nl.hideproxy.me/

    // In real life I would not write it as this, but choosing the fastest approach
    return <Observable<Loan[]>>(this.http.get(url, { headers }));
  }

  // load(rating: Rating): Observable<Loan[]> {
  //   let url = environment.apiUrl;
  //   url += `?rating__in=[${rating.title}]`;

  //   const headers = new HttpHeaders({
  //     'X-Page': '0',
  //     'X-Size': '50'
  //   });

  //   // should be compatible with https://nl.hideproxy.me/
  //   // url = encodeURIComponent(url);
  //   url = environment.proxyUrl + url;

  //   // TODO: I might run into issues with paging
  //   // In real life I would not write it as this, but choosing the fastest approach
  //   return <Observable<Loan[]>>(this.http.get(url, { headers }));
  // }

  // Future proof - it can support array of ratings, similar as in the original Zonky app
  // Yes, I know it is not required... Just a demo
  /**
   // tslint:disable-next-line:max-line-length
   * Converts ['A', 'B'] into something like in=%5B%22AAAAAA%22%2C%22AAAAA%22%2C%22AAAA%22%2C%22AAA%22%2C%22AAE%22%2C%22AA%22%2C%22AE%22%2C%22A%22%2C%22B%22%2C%22C%22%2C%22D%22%5D
   *
   */
  private encodeRatings(ratings: Array<Rating>): string {
    const arrayContent = ratings.map(r => r.title).join(',');
    return encodeURI(`[${arrayContent}]`);
  }

  private composeUrl(): string {
    return `${environment.baseApiUrl}/${this.apiNamespace}`;
  }
}
