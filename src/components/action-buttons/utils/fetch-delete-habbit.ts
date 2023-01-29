export const fetchDeleteHabbit = async (habbitId: string) => {
    const url = `http://localhost:3001/delete-habbit?id=${habbitId}`;
    const response = await fetch(url, {mode:'cors'});
    
    if (response.ok) {
        return await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}