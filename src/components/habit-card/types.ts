import { Colors } from 'constants/constants';

export type HabitCardProps = {
  id: string;
  title: string;
  icon: string;
  currentValue: number;
  targetValue: number;
  color: Colors;
};
