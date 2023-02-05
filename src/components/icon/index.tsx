import { IconProps } from "./types";
import "./icon.css";

export const Icon = ({iconName, color, size='large'}: IconProps) => {
    return (
        <div className={`icon ${color} icon-${size}`}>{iconName}</div>
    )
}