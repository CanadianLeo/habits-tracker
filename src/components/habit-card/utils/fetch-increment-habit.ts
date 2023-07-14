import { api } from "../../../api/Api";

export const fetchIncrementHabit = async (id: string) => {
  try {
    const { data } = await api.habits.habitControllerIncrementHabit(id);
    return data;
  } catch (e) {
    // TODO: add NetworkException
    console.log(e);
  }
}