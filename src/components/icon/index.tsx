import cn from 'classnames';
import colors from 'constants/colors.module.scss';
import { getIcon } from './utils/get-icon';
import { IconProps } from './types';
import styles from './styles.module.scss';

export const Icon = ({ iconName, color, size = 'large' }: IconProps) => {
  return (
    <div className={cn(styles.icon, colors[`${color}`], styles[`icon-container-${size}`])}>
      {getIcon(iconName, size)}
    </div>
  );
};
