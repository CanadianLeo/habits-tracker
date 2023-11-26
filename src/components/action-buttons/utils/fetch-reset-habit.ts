import { api } from 'api';

export const fetchResetHabit = async (habitId: string) => {
  try {
    const { data } = await api.habits.habitControllerResetHabit(habitId);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
};
