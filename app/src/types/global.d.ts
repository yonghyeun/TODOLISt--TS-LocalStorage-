type Range<N extends Number, R extends number[] = []> = R['length'] extends N
  ? R[number]
  : Range<N, [...R, R['length']]>;

export type MonthKey = Range<13>;
export type MonthValue =
  | 'All'
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type WeekKey = Range<6>;
export type WeekValue = 'All' | `Week${WeekKey}`;

export type DayKey = Range<8>;
export type DayValue =
  | 'All'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';
