import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHabits } from 'store/action-creators/habits';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { NewHabit } from 'components/new-habit';
import { List } from 'components/list';
import { Header } from 'components/habits-list-header';
import { Text } from 'components/text';
import { stateSelector } from 'store/selectors';
import styles from './styles.module.scss';

export const HabitsList = () => {
  const [newHabitShow, setNewHabitShow] = useState(false);
  const { habits, error, loading } = useTypedSelector(stateSelector);
  const dispatch = useDispatch();

  // use becouse UseEffect called twice in React 18
  const reloadLock = useRef(true);

  const onButtonClick = () => {
    setNewHabitShow(!newHabitShow);
  };
  const onClose = () => {
    setNewHabitShow(false);
  };

  useEffect(() => {
    if (reloadLock.current) {
      reloadLock.current = false;

      // strange bug with @types/react
      dispatch<any>(fetchHabits());
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header onButtonClick={onButtonClick} />
      {newHabitShow && <NewHabit onClose={onClose} />}
      {loading ? <Text>Habits are loadings</Text> : error ? <Text>{error}</Text> : <List habits={habits} />}
    </div>
  );
};
