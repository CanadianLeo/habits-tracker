import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHabits } from 'store/action-creators/habits';
import { stateSelector } from 'store/selectors';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useLoader } from 'hooks/use-loader';
import { Header } from 'components/habits-list-header';
import { NewHabit } from 'components/new-habit';
import { List } from 'components/list';
import { Text } from 'components/text';
import styles from './styles.module.scss';

export const HabitsList = () => {
  const [showNewHabitModal, setShowNewHabitModal] = useState(false);
  const { habits, error } = useTypedSelector(stateSelector);
  const { withLoader } = useLoader();
  const dispatch = useDispatch();

  // use becouse UseEffect called twice in React 18
  const reloadLock = useRef(true);

  const onButtonClick = () => {
    setShowNewHabitModal(!showNewHabitModal);
  };
  const onClose = () => {
    setShowNewHabitModal(false);
  };

  useEffect(() => {
    if (reloadLock.current) {
      reloadLock.current = false;
      // strange bug with @types/react
      withLoader(dispatch<any>(fetchHabits()));
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header onButtonClick={onButtonClick} />
      {showNewHabitModal && <NewHabit onClose={onClose} />}
      { error ? <Text>{error}</Text> : <List habits={habits} />}
    </div>
  );
};
