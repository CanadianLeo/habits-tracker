import cn from 'classnames';
import { ButtonProps } from "./types";
import { Colors } from '../../constants';
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const Button = ({title, icon, onClick, color = Colors.color1 }: ButtonProps) => {
  return (
    <button
      className={cn(
        styles['button'],
        colors[`border-${color}`],
        colors[`${color}-hovered`]
      )}
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  )
}