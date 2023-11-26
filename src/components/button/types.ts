import { MouseEventHandler, ReactNode } from 'react';
import { Colors } from 'constants/constants';

export type ButtonProps = {
  onClick?: MouseEventHandler;
  color?: Colors;
  title?: string;
  icon?: ReactNode;
};
