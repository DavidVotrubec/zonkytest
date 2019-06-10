// Normally this would not be in single file
// But for demo-app it is ok

export interface Rating {
  title: RatingName;
  percentile: number;
  color: Colors;
}

// Just some basic/interesting properties
export interface Loan {
  name: string;
  amount: number;
  story: string;
  currency: Currency;
  rating: RatingName;
}

export enum Currency {
  Czk = 'CZK'
}

export enum RatingName {
  AAAAAA = 'AAAAAA',
  AAAAA = 'AAAAA',
  AAAA = 'AAAA',
  AAA = 'AAA',
  AAE = 'AAE',
  AA = 'AA',
  AE = 'AE',
  A = 'A',
  B = 'B',
  C =  'C',
  D = 'D',
}

export enum Colors {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Olive = 'olive',
  Green = 'green',
  Teal = 'teal',
  Blue = 'blue',
  Violet = 'violet',
  Purple = 'purple',
  Pink = 'pink',
  Brown = 'brown',
  Grey = 'grey',
  Black = 'black',
}
