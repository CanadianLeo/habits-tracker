import { api } from 'api';
import { Habit } from 'types/types';

export const fetchNewHabit = async (habit: Habit) => {
  try {
    const { data } = await api.habits.habitControllerCreateHabit(habit);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
};
