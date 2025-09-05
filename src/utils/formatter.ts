export const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat('en', options).format(value);

export const formatNumberToCompact = (value: number, decimals: number = 2): string => {
  const suffixes = ['', 'K', 'M', 'B', 'T']; // suffixes for thousands, millions, billions, etc.
  let suffixIndex = 0;

  // loop until the number is less than 1000 or no more suffixes
  while (value >= 1000 && suffixIndex < suffixes.length - 1) {
    value /= 1000;
    suffixIndex++;
  }

  // found to specified decimals without rounding up
  const roundedValue = Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals);

  // append the suffix
  return `${roundedValue}${suffixes[suffixIndex]}`;
};
