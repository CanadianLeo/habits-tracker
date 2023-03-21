import { Colors, Icons } from "../../../constants";
import { Habit } from "../../../types";

export const formHabitBuilder = (habit: Habit) => ({
    name: habit.name,
    description: habit.description,
    count: habit.targetValue,
    period: habit.period,

    // TODO: не попадает в форму при изменении привычки
    color: Colors[habit.color],
    icon: Icons[habit.icon],
});