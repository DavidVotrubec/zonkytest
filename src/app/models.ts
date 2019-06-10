// Normally this would not be in single file
// But for demo-app it is ok

export interface Rating {
  title: string;
  percentile: number;
  color: Colors;
}

// Just some basic/interesting properties
export interface Loan {
  name: string;
  amount: number;
  story: string;
  currency: string; // most likely enum
  rating: string; // most likely enum

  hover?: boolean;
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
