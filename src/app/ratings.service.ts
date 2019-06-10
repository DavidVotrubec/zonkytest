import { Injectable } from '@angular/core';
import { Rating, Colors } from './models';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  getRatings(): Array<Rating> {
    return [
      {
        title: 'AAAAAA',
        percentile: 2.99,
        color: Colors.Red
      },
      {
        title: 'AAAAA',
        percentile: 3.99,
        color: Colors.Orange
      },
      {
        title: 'AAAA',
        percentile: 4.99,
        color: Colors.Yellow
      },
      {
        title: 'AAA',
        percentile: 5.99,
        color: Colors.Olive
      },
      {
        title: 'AAE',
        percentile: 6.99,
        color: Colors.Green
      },
      {
        title: 'AA',
        percentile: 8.49,
        color: Colors.Teal
      },
      {
        title: 'AE',
        percentile: 9.49,
        color: Colors.Blue
      },
      {
        title: 'A',
        percentile: 10.99,
        color: Colors.Violet
      },
      {
        title: 'B',
        percentile: 13.49,
        color: Colors.Purple
      },
      {
        title: 'C',
        percentile: 15.49,
        color: Colors.Pink
      },
      {
        title: 'D',
        percentile: 19.99,
        color: Colors.Brown
      }
    ];
  }
}
