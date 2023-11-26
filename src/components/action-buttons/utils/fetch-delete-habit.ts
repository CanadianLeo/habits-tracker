import { api } from 'api';

export const fetchDeleteHabit = async (habitId: string) => {
  try {
    const { data } = await api.habits.habitControllerRemoveHabit(habitId);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
};
