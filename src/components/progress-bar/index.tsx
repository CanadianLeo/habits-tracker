import cn from 'classnames';
import { ProgressBarProps } from './types';
import { DECREMENT_BUTTON_CONTENT, INCREMENT_BUTTON_CONTENT } from './constants';
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const ProgressBar = ({
  title,
  value,
  color,
  onClickIncrement,
  onClickDecrement,
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
      {onClickDecrement &&
        <div
          className={cn(
            styles['decrement-button'],
            styles.button,
            colors[`border-${color}`],
            colors[`${color}-hovered`]
          )}
          onClick={onClickDecrement}
        >
          {DECREMENT_BUTTON_CONTENT}
        </div>
      }
      <div
        style={filledStyles}
        className={cn(
          styles.wrapper,
          styles['filled'],
          colors[`${color}`]
        )}
      />
      <div className={styles.title}>{title}</div>
      {onClickIncrement &&
        <div
          className={cn(
            styles['increment-button'],
            styles.button,
            colors[`border-${color}`],
            colors[`${color}-hovered`]
          )}
          onClick={onClickIncrement}
        >
          {INCREMENT_BUTTON_CONTENT}
        </div>
      }
    </div>
  );
};
