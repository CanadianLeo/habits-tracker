import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../icon';
import { HabitCardProps } from './types';
import { ProgressBar } from '../progress-bar';
import { ActionButtons } from '../action-buttons';
import styles from './styles.module.scss';
import { fetchIncrementHabit } from './utils/fetch-increment-habit';
import { fetchHabits } from '../../store/action-creators/habits';

export const HabitCard = ({
    id,
    title,
    icon,
    currentValue,
    targetValue,
    color,
}: HabitCardProps) => {
    const dispatch = useDispatch()
    const progressBarTitle = useMemo(
        () => `${currentValue}/${targetValue}`,
        [currentValue, targetValue]
    );
    const progressBarValue = useMemo(
        () => currentValue / (targetValue / 100),
        [currentValue, targetValue]
    );

    const onClickAdd = async () => {
        fetchIncrementHabit(id).then(() => {
            dispatch<any>(fetchHabits());
        });
    };

    return (
        <div className={styles['habit-card']}>
            <Icon iconName={icon} color={color} />
            <h3 className={styles['habit-card_title']}>{title}</h3>
            <ProgressBar
                title={progressBarTitle}
                value={progressBarValue}
                color={color}
                onClickAdd={onClickAdd}
            />
            <ActionButtons habitId={id} color={color} />
        </div>
    );
};
