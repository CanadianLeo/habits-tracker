export const fetchDeleteHabit = async (habitId: string) => {
    try {
        const url = `http://localhost:3001/habits/${habitId}`;
        await fetch(url, { mode: 'cors', method: 'delete' });
    } catch (e) {
        // TODO: add NetworkException
        console.log(e);
    }
};
