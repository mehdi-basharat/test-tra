import Decimal from 'decimal.js';

export const convertPointsToDollars = (points: number): number => {
  const conversionRate = new Decimal(100000); // 100,000 points equals 1 dollar
  const pointsDecimal = new Decimal(points);
  const dollars = pointsDecimal.div(conversionRate);

  return parseFloat(dollars.toFixed());
};

export const convertDollarsToPoints = (dollars: number): number => {
  const conversionRate = new Decimal(100000); // 100,000 points equals 1 dollar
  const dollarsDecimal = new Decimal(dollars);
  const points = dollarsDecimal.times(conversionRate);

  return parseFloat(points.toFixed());
};
