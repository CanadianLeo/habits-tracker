import { Habbit } from "../../habbits-list/types";

export const fetchEditHabbit = async (habbit: Habbit) => {
    const url = 'http://localhost:3001/edit-habbit';
    const response = await fetch(url, {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify(habbit)
    });
    
    if (response.ok) {
        return await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}