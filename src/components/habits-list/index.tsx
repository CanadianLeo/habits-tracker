import { useEffect, useState } from "react";
import { HabitCard } from "../habit-card";
import { fetchHabits } from "./utils/fetch-habits";
import { Habit } from "./types";
import "./habits-list.css";


export const HabitsList = () => {
  const [habits, setHabits] = useState<Array<Habit>>([]);

  const getHabits = async () => {
    setHabits(await fetchHabits());
  }

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div className="habits-list_wrapper">
      {habits.map((item) => 
        <HabitCard 
          id={item.id} 
          key={item.id} 
          title={item.name} 
          icon={item.icon} 
          currentValue={item.currentValue} 
          targetValue={item.targetValue} 
          color={item.color} 
        />
      )}
    </div>
  );
}
