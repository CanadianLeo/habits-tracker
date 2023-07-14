import { HabitDto } from "../api/Api";
import { Habit } from "../types";
import { getColor } from "./get-color";
import { getIcon } from "./get-icon";

export const buildHabits = (habits: Array<HabitDto>): Array<Habit> => 
  habits.map(habit => ({
    id: habit.id,
    name: habit.name,
    description: habit.description,
    icon: getIcon(habit.icon),
    currentValue: habit.currentValue,
    targetValue: habit.targetValue,
    color: getColor(habit.color),
    period: habit.period,
  }))