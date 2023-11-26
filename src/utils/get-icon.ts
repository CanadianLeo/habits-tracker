import { DEFAULT_ICON, Icons, IconsList } from 'constants/constants';

export const getIcon = (iconName: string): Icons => {
  return IconsList.find(icon => icon === iconName) ?? DEFAULT_ICON;
};
