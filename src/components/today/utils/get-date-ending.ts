export const getDateEnding = (day: number) => {
  if (day === 11 || day === 12) return 'th';

  switch (day % 10) {
    case 0:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return 'th';
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
  }
};
