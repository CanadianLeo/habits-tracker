import { Colors, ColorsList, DEFAULT_COLOR } from 'constants/constants';

export const getColor = (colorName: string): Colors => {
  return ColorsList.find(item => item === colorName) ?? DEFAULT_COLOR;
};
