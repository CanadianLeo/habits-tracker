import { Colors, Icons } from 'constants/constants';

export type Habit = {
  id: string;
  name: string;
  description: string;
  icon: Icons;
  currentValue: number;
  targetValue: number;
  color: Colors;
  period: string;
};
