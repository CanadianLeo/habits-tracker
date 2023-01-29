import { useMemo } from "react";
import { Icon } from "../icon";
import { HabbitCardProps } from "./types";
import './habbit-card.css';
import { ProgressBar } from "../progress-bar";
import { ActionButtons } from "../action-buttons";

export const HabbitCard = ({id, title, icon, currentValue, targetValue, color}: HabbitCardProps) => {

    const progressBarTitle = useMemo(() => `${currentValue}/${targetValue}`
    , [currentValue, targetValue]);
    const progressBarValue = useMemo(() => currentValue / (targetValue / 100) 
    , [currentValue, targetValue]);

    return (
        <div className="habbit-card">
            <Icon iconName={icon} color={color} />
            <h3 className="habbit-card_title">{title}</h3>
            <ProgressBar title={progressBarTitle} value={progressBarValue} color={color}/>
            <ActionButtons habbitId={id} />
        </div>
    )
}