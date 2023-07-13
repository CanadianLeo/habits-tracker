import axios from "axios";
import { Habit } from "../../../types";

export const fetchEditHabit = async (habit: Habit) => {
  await axios.put(`http://localhost:3001/habits/${habit.id}`, habit);
}
