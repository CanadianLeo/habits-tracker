import { PERIODS } from 'components/new-habit/constants';
import { Period } from 'components/new-habit/types';

export const getPeriod = (value: string): Period | undefined => {
  return PERIODS.find(period => period.id === value);
};
