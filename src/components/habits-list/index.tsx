import { useEffect, useState } from "react";
import { fetchHabits } from "./utils/fetch-habits";
import { Habit } from "./types";
import { NewHabit } from "../new-habit";
import { List } from "../list";
import { Header } from "./components/header";
import styles from './styles.module.scss';


export const HabitsList = () => {
  const [habits, setHabits] = useState<Array<Habit>>([]);
  const [newHabitShow, setNewHabitShow] = useState(false);

  const getHabits = async () => {
    setHabits(await fetchHabits());
  }
  const onButtonClick = () => {
    setNewHabitShow(!newHabitShow)
  }
  const onClose = () => {
    setNewHabitShow(false);
  }

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div className={ styles.wrapper }>
      <Header onButtonClick={onButtonClick}/>
      { newHabitShow && <NewHabit onClose={onClose} /> }
      <List habits={habits} />
    </div>
  );
}
