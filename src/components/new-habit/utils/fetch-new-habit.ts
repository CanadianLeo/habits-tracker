import axios from "axios";
import { Habit } from "../../../modules/habits-list/types";

export const fetchNewHabit = (habit: Habit) => {
    axios.post('http://localhost:3001/habits', habit)
}