import axios from "axios";

export const fetchIncrementHabit = async (id: string) => {
    await axios.put(`http://localhost:3001/habits/increment/${id}`);
}