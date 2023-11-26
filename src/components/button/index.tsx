import cn from 'classnames';
import colors from 'constants/colors.module.scss';
import { Colors } from 'constants/constants';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

export const Button = ({ title, icon, onClick, color = Colors.color1 }: ButtonProps) => {
  return (
    <button className={cn(styles['button'], colors[`border-${color}`], colors[`${color}-hovered`])} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
};
