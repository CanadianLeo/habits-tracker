import cn from 'classnames';
import { IconProps } from './types';
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const Icon = ({ iconName, color, size = 'large' }: IconProps) => {
  return (
    <div
      className={cn(
        styles.icon,
        colors[`${color}`],
        styles[`icon-${size}`]
      )}
    >
      {iconName}
    </div>
  );
};
