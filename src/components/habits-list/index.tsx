import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NewHabit } from '../new-habit';
import { Header } from './components/header';
import { List } from '../list';
import { fetchHabits } from '../../store/action-creators/habits';
import { useTypedSelector } from '../../hooks/useRypedSelector';
import styles from './styles.module.scss';

export const HabitsList = () => {
    const [newHabitShow, setNewHabitShow] = useState(false);
    const {habits, error, loading} = useTypedSelector(state => state);
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
    }, [dispatch, habits]);

    return (
        <div className={styles.wrapper}>
            <Header onButtonClick={onButtonClick} />
            {newHabitShow && <NewHabit onClose={onClose} />}
            {loading ? 
            <div>Habits are loadings</div> 
            : error || <List habits={habits} />}

        </div>
    );
};
