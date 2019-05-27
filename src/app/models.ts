// Normally this would not be in single file
// But for demo-app it is ok

export interface Rating {
  title: string;
  percentile: number;
}

// Just some basic/interesting properties
export interface Loan {
  name: string;
  amount: number;
  story: string;
  currency: string; // most likely enum
  rating: string; // most likely enum
}
