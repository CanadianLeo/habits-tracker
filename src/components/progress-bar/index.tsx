import cn from 'classnames';
import { ProgressBarProps } from './types';
import { ADD_BUTTON_CONTENT } from './constants';
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const ProgressBar = ({
  title,
  value,
  color,
  onClickAdd,
}: ProgressBarProps) => {
  const filledStyles = {
    width: `${value}%`,
  };
  return (
    <div
      className={cn(
        styles.wrapper,
        colors[`border-${color}`]
      )}
    >
      <div 
        className={cn(
          styles['decrement-button'],
          styles.button,
          colors[`border-${color}`],
          colors[`${color}-hovered`]
        )}
        onClick={onClickAdd}
      >
        -
      </div>
      <div
        style={filledStyles}
        className={cn(
          styles.wrapper,
          styles['filled'],
          colors[`${color}`]
        )}
      />
      <div className={styles.title}>{title}</div>
      <div
        className={cn(
          styles['increment-button'],
          styles.button,
          colors[`border-${color}`],
          colors[`${color}-hovered`]
        )}
        onClick={onClickAdd}
      >
        {ADD_BUTTON_CONTENT}
      </div>
    </div>
  );
};
