export const normalizeShiftHour = (shift: string) => {
  if (shift.length === 5) {
    return `${shift}:00`;
  }
  return shift;
};

export const denormalizeShiftShour = (shift: string) => {
  if (shift.length === 5) {
    return shift;
  }
  return shift.slice(0, 5);
};
