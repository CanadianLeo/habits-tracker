import { HabitDto } from "src/habit/dto/habit.dto";

export const habitComparator = (a: HabitDto, b: HabitDto) => (b.targetValue - b.currentValue) - (a.targetValue - a.currentValue);