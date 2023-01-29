import { Colors } from "../../constants";

export type Habbit = {
    id: string;
    name: string;
    description: string;
    icon: string;
    currentValue: number;
    targetValue: number;
    color: Colors;
}