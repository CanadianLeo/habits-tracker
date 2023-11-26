import cn from 'classnames';
import colors from 'constants/colors.module.scss';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { ProgressBarProps } from './types';
import styles from './styles.module.scss';

export const ProgressBar = ({ title, value, color, onClickIncrement, onClickDecrement }: ProgressBarProps) => {
  const filledStyles = {
    width: `${value}%`,
  };
  return (
    <div className={cn(styles.container, colors[`border-${color}`])}>
      {onClickDecrement && (
        <div
          className={cn(
            styles['decrement-button'],
            styles.button,
            colors[`border-${color}`],
            colors[`${color}-hovered`]
          )}
          onClick={onClickDecrement}
        >
          <BiMinus />
        </div>
      )}
      <div style={filledStyles} className={cn(styles.container, styles['filled'], colors[`${color}`])} />
      <div className={styles.title}>{title}</div>
      {onClickIncrement && (
        <div
          className={cn(
            styles['increment-button'],
            styles.button,
            colors[`border-${color}`],
            colors[`${color}-hovered`]
          )}
          onClick={onClickIncrement}
        >
          <BiPlus />
        </div>
      )}
    </div>
  );
};
