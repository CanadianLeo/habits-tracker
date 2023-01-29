import { ProgressBarProps } from "./types";
import './progress-bar.css';

export const ProgressBar = ({ title, value, color }: ProgressBarProps) => {
    const filledStyles = {
        width: `${value}%`,
    }
    return (
        <div className={`progress-bar_wrapper border-${color}`}>
            <div style={filledStyles} className={`progress-bar_wrapper filled ${color}`} />
            <div className="progress-bar_title">{title}</div>
        </div>
    )
}