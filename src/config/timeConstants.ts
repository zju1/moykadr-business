export const timeConstants = {
  years: new Array(20).fill(0).map((_item, index) => ({
    label: (index + 2023).toString(),
    value: index + 2023,
  })),
  months: new Array(12).fill(0).map((_item, index) => ({
    label: `month${index + 1}`,
    value: index + 1,
  })),
};
