import { Colors } from '../../constants';

export type ProgressBarProps = {
  title: string;
  value: number;
  color: Colors;
  onClickIncrement?: () => void;
  onClickDecrement?: () => void;
};
