import { HabitState } from 'types/habits-reducer-types';

export const stateSelector = (state: HabitState) => state;
export const habitSelector = (habitId: string) => (state: HabitState) =>
  state.habits.find(habit => habit.id === habitId);
