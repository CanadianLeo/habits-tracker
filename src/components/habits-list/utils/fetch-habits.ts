export const fetchHabits = async () => {
    const url = 'http://localhost:3001/get-habits';
    const response = await fetch(url, { mode: 'cors' });

    if (response.ok) {
        return await response.json();
    } else {
        alert('Ошибка HTTP: ' + response.status);
    }
};
