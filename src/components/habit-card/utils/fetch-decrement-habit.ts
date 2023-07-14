import axios from "axios";

export const fetchDecrementHabit = async (id: string) => {
  await axios.put(`http://localhost:3001/habits/decrement/${id}`);
}