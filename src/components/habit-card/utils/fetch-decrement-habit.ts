import { api } from "../../../api";

export const fetchDecrementHabit = async (id: string) => {
  try {
    const { data } = await api.habits.habitControllerDecrementHabit(id);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
}