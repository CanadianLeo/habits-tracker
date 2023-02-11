import cn from 'classnames';
import { ProgressBarProps } from "./types";
import { ADD_BUTTON_CONTENT } from "./constants";
import colors from '../../colors.module.scss';
import styles from './styles.module.scss';

export const ProgressBar = ({ title, value, color, onClickAdd }: ProgressBarProps) => {
    const filledStyles = {
        width: `${value}%`,
    }
    return (
        <div className={ cn(styles['progress-bar_wrapper'], colors[`border-${color}`]) }>
            <div style={ filledStyles } className={ cn(styles['progress-bar_wrapper'], styles['filled'], colors[`${ color }`]) } />
            <div className={styles['progress-bar_title']}>{ title }</div>
            <div
                className={ cn(styles['progress-bar_add-button'], colors[`border-${color}`], colors[`${color}-hovered`]) }
                onClick={onClickAdd}>
                    { ADD_BUTTON_CONTENT }
            </div>
        </div>
    )
}