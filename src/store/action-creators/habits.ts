import { Dispatch } from "redux";
import { HabitsAction, ActionTypes } from "../../types/habitsReducerTypes";

export const fetchHabits = () => {
    return async (dispatch: Dispatch<HabitsAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_HABITS});
            const url = 'http://localhost:3001/habits';
            const response = await fetch(url, { mode: 'cors' });

            if (response.ok) {
                dispatch({type: ActionTypes.FETCH_HABITS_SUCCESS, payload: await response.json()});
            } else {
                dispatch({type: ActionTypes.FETCH_HABITS_FAILED, payload: 'Ошибка HTTP: ' + response.status});
            }
        } catch (e) {
            dispatch({type: ActionTypes.FETCH_HABITS_FAILED, payload: 'Habit list is not able'});
        }
    }
}