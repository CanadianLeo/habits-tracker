import { HabitCard } from '../habit-card';
import { ListProps } from './types';
import style from './styles.module.scss';

export const List = ({ habits }: ListProps) => {
    return (
        <div className={style['habits-list_wrapper']}>
            {habits.map((item) => (
                <HabitCard
                    id={item.id}
                    key={item.id}
                    title={item.name}
                    icon={item.icon}
                    currentValue={item.currentValue}
                    targetValue={item.targetValue}
                    color={item.color}
                />
            ))}
        </div>
    );
};
