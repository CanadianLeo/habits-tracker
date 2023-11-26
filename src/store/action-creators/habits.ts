import { Dispatch } from 'redux';
import { api } from 'api';
import { HabitsAction, ActionTypes } from 'types/habits-reducer-types';
import { buildHabits } from 'utils/builder-habits';

export const fetchHabits = () => {
  return async (dispatch: Dispatch<HabitsAction>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_HABITS });
      const { data, status } = await api.habits.habitControllerGetHabits();
      if (data) {
        dispatch({
          type: ActionTypes.FETCH_HABITS_SUCCESS,
          payload: buildHabits(data),
        });
      } else {
        dispatch({
          type: ActionTypes.FETCH_HABITS_FAILED,
          payload: 'Ошибка HTTP: ' + status,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_HABITS_FAILED,
        payload: 'Habit list is not able',
      });
    }
  };
};
