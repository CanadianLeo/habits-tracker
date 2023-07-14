import { Colors } from '../../constants';

export type ProgressBarProps = {
  title: string;
  value: number;
  color: Colors;
  onClickAdd: () => void;
};
