import { ProgressBarProps } from "./types";
import { ADD_BUTTON_CONTENT } from "./constants";
import '../../colors.css';
import './progress-bar.css';

export const ProgressBar = ({ title, value, color, onClickAdd }: ProgressBarProps) => {
    const filledStyles = {
        width: `${value}%`,
    }
    return (
        <div className={ `progress-bar_wrapper border-${color}` }>
            <div style={ filledStyles } className={`progress-bar_wrapper filled ${ color }`} />
            <div className="progress-bar_title">{ title }</div>
            <div
                className={ `progress-bar_add-button border-${color} ${color}-hovered`}
                onClick={onClickAdd}>
                    { ADD_BUTTON_CONTENT }
            </div>
        </div>
    )
}