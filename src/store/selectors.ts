import { HabitState } from "../types/habitsReducerTypes";

export const stateSelector = (state: HabitState) => state;
export const habitSelector = (habitId: string) => (state: HabitState) => state.habits.filter(habit => habit.id === habitId);