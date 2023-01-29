import { useEffect, useState } from "react";
import { HabbitCard } from "../habbit-card";
import { fetchHabbits } from "./utils/fetch-habbits";
import { Habbit } from "./types";
import "./habbits-list.css";


export const HabbitsList = () => {
  const [habbits, setHabbits] = useState<Array<Habbit>>([]);

  const getHabbits = async () => {
    setHabbits(await fetchHabbits());
  }

  useEffect(() => {
    getHabbits();
  }, []);

  return (
    <div className="habbits-list_wrapper">
      {habbits.map((item) => 
        <HabbitCard 
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
