import cn from 'classnames';
import { getIcon } from './utils/get-icon';
import { IconProps } from './types';
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const Icon = ({ iconName, color, size = 'large' }: IconProps) => {
  return (
    <div
      className={cn(
        styles.icon,
        colors[`${color}`],
        styles[`icon-container-${size}`]
      )}
    >
      {getIcon(iconName, size)}
    </div>
  );
};
