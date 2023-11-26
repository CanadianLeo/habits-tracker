import { DEFAULT_COLOR, DEFAULT_ICON } from 'constants/constants';
import { Period } from './types';

export const PERIODS: Array<Period> = [
  {
    id: 'day',
    name: 'day',
  },
  {
    id: 'week',
    name: 'week',
  },
  {
    id: 'month',
    name: 'month',
  },
  {
    id: 'quarter',
    name: 'quarter',
  },
  {
    id: 'year',
    name: 'year',
  },
];

export const CREATE_HABIT_TITLE = 'Create new habit';
export const CREATE_HABIT_BUTTON_TITLE = 'Create';

export const NEW_HABIT_FORM_DEFAULT_VALUES = {
  name: '',
  description: '',
  count: 1,
  period: PERIODS[0],
  color: DEFAULT_COLOR,
  icon: DEFAULT_ICON,
};
