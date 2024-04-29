import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { fetchHabits } from 'store/action-creators/habits';
import { useLoader } from 'hooks/use-loader';
import { Icon } from 'components/icon';
import { ProgressBar } from 'components/progress-bar';
import { ActionButtons } from 'components/action-buttons';
import { fetchDecrementHabit } from './utils/fetch-decrement-habit';
import { fetchIncrementHabit } from './utils/fetch-increment-habit';
import { HabitCardProps } from './types';
import styles from './styles.module.scss';

export const HabitCard = ({ id, title, icon, currentValue, targetValue, color }: HabitCardProps) => {
  const dispatch = useDispatch();
  const { withLoader } = useLoader();
  const progressBarTitle = useMemo(() => `${currentValue}/${targetValue}`, [currentValue, targetValue]);
  const progressBarValue = useMemo(() => currentValue / (targetValue / 100), [currentValue, targetValue]);

  const onClickIncrementHandler = async () => {
    withLoader(fetchIncrementHabit(id).then(async() => {
      await dispatch<any>(fetchHabits());
    }));
  };

  const onClickDecrementHandler = async () => {
    withLoader(fetchDecrementHabit(id).then(async() => {
      await dispatch<any>(fetchHabits());
    }));
  };

  return (
    <div className={styles.container}>
      <Icon iconName={icon} color={color} />
      <h3 className={styles.title}>{title}</h3>
      <ProgressBar
        title={progressBarTitle}
        value={progressBarValue}
        color={color}
        onClickIncrement={onClickIncrementHandler}
        onClickDecrement={onClickDecrementHandler}
      />
      <ActionButtons habitId={id} color={color} />
    </div>
  );
};
