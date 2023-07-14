import { Habit } from "../../../types";
import { api } from "../../../api/Api";

export const fetchEditHabit = async (habit: Habit) => {
  try {
    const { data } = await api.habits.habitControllerUpdateHabit(habit.id, habit);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
}
