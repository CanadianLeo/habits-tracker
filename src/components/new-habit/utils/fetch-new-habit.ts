import { api } from "../../../api/Api";
import { Habit } from "../../../types";

export const fetchNewHabit = async (habit: Habit) => {
  try {
    const { data } = await api.habits.habitControllerCreateHabit(habit);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
}