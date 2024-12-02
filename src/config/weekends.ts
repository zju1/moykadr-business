export const weekends = new Array(7).fill(0).map((_item, index) => ({
  label: `weekday${index + 1}`,
  value: `${index + 1}`,
}));
