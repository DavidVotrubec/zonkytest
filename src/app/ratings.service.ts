import { Injectable } from '@angular/core';
import { Rating, RatingName, Colors } from './models';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  getRatings(): Array<Rating> {
    return [
      {
        title: RatingName.AAAAAA,
        percentile: 2.99,
        color: Colors.Red
      },
      {
        title: RatingName.AAAAA,
        percentile: 3.99,
        color: Colors.Orange
      },
      {
        title: RatingName.AAAA,
        percentile: 4.99,
        color: Colors.Yellow
      },
      {
        title: RatingName.AAA,
        percentile: 5.99,
        color: Colors.Olive
      },
      {
        title: RatingName.AAE,
        percentile: 6.99,
        color: Colors.Green
      },
      {
        title: RatingName.AA,
        percentile: 8.49,
        color: Colors.Teal
      },
      {
        title: RatingName.AE,
        percentile: 9.49,
        color: Colors.Blue
      },
      {
        title: RatingName.A,
        percentile: 10.99,
        color: Colors.Violet
      },
      {
        title: RatingName.B,
        percentile: 13.49,
        color: Colors.Purple
      },
      {
        title: RatingName.C,
        percentile: 15.49,
        color: Colors.Pink
      },
      {
        title: RatingName.D,
        percentile: 19.99,
        color: Colors.Brown
      }
    ];
  }
}
