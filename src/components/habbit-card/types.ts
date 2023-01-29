import { Colors } from "../../constants";

export type HabbitCardProps = {
    id: string;
    title: string;
    icon: string;
    currentValue: number;
    targetValue: number;
    color: Colors;
}