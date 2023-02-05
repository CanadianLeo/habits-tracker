export const fetchDeleteHabit = async (habitId: string) => {
    const url = `http://localhost:3001/delete-habit?id=${habitId}`;
    const response = await fetch(url, {mode:'cors'});
    
    if (response.ok) {
        return await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}