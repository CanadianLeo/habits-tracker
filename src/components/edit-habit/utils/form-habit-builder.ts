import { Colors, Icons } from "../../../constants";
import { Habit } from "../../../types";
import { Period } from "../../new-habit/types";
import { NEW_HABIT_FORM_DEFAULT_VALUES, PERIODS } from "../../new-habit/constants";

export const formHabitBuilder = (habit: Habit | undefined) => {
  if (!habit) return NEW_HABIT_FORM_DEFAULT_VALUES;
  return {
    name: habit.name,
    description: habit.description,
    count: habit.targetValue,
    period: getPeriod(habit.period),
    color: Colors[habit.color],
    icon: Icons[habit.icon],
  }
};

const getPeriod = (value: string): Period | undefined => {
  return PERIODS.find(period => period.id === value);
}