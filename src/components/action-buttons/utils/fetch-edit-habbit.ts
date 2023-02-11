import { Habit } from '../../habits-list/types';

export const fetchEditHabit = async (habit: Habit) => {
    const url = 'http://localhost:3001/edit-habit';
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(habit),
    });

    if (response.ok) {
        return await response.json();
    } else {
        alert('Ошибка HTTP: ' + response.status);
    }
};
