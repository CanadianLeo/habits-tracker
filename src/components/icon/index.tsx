import { IconProps } from "./types";
import "./icon.css";

export const Icon = ({iconName, color}: IconProps) => {
    return (
        <div className={`icon ${color}`}>{iconName}</div>
    )
}