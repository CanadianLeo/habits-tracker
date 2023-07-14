import { Colors, Icons } from "../../../constants";
import { Habit } from "../../../types";
import { NEW_HABIT_FORM_DEFAULT_VALUES } from "../../new-habit/constants";
import { getPeriod } from "../../../utils/get-period";

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

