import cn from 'classnames';
import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { ActionButtonsProps } from './types';
import styles from './styles.module.scss';
import colors from '../../colors.module.scss';
import { fetchDeleteHabit } from './utils/fetch-delete-habit';
import { EditHabit } from '../edit-habit';

export const ActionButtons = ({
    habitId,
    color,
    hovered,
}: ActionButtonsProps) => {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const [editHabitShow, setEditHabitShow] = useState(false);

    const onClickDecrement = () => {
        // TODO: use fetch
        console.log('decrement ' + habitId);
        setShow(false);
    };

    const onClickDelete = () => {
        // TODO: add reload habits list
        fetchDeleteHabit(habitId);
        setShow(false);
    };

    const onClickEdit = () => {
        // TODO: use fetch
        console.log('edit ' + habitId);
        setEditHabitShow(true);
        setShow(false);
    };

    const onClickReset = () => {
        // TODO: use fetch
        console.log('reset ' + habitId);
        setShow(false);
    };

    const onClickHandler = () => {
        setShow(!show);
    };
    const onClickOutside = () => {
        setShow(false);
    };
    useOnClickOutside(ref, onClickOutside);

    const actions = [
        {
            id: 1,
            title: 'Уменьшить на 1',
            onClick: onClickDecrement,
        },
        {
            id: 2,
            title: 'Изменить',
            onClick: onClickEdit,
        },
        {
            id: 3,
            title: 'Сбросить до 0',
            onClick: onClickReset,
        },
        {
            id: 4,
            title: 'Удалить',
            onClick: onClickDelete,
        },
    ];

    return (
        <div ref={ref}>
            <button
                className={cn(
                    styles['action-button'],
                    colors[`border-${color}`],
                    hovered ? colors[`${color}-hovered`] : ''
                )}
                onClick={onClickHandler}
            >
                ...
            </button>
            {show && (
                <div className={styles['action-button_modal-container']}>
                    {actions.map((item) => (
                        <div
                            key={item.id}
                            onClick={item.onClick}
                            className={styles['action-button_action']}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
            {editHabitShow && (
                <EditHabit habitId={habitId} onClose={() => setEditHabitShow(false)} />
            )}
        </div>
    );
};
