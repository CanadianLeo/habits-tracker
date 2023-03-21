import axios from "axios";
import { Habit } from "../../../types";

export const fetchEditHabit = (habit: Habit) => {
    axios.put(`http://localhost:3001/habits/${habit.id}`, habit)
}
