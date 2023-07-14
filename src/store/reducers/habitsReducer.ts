import { ActionTypes, HabitsAction, HabitState } from "../../types/habitsReducerTypes";

const initialState: HabitState = {
  loading: false,
  error: null,
  habits: []
}

export const habitsReducer = (state = initialState, action: HabitsAction): HabitState => {
  switch (action.type) {
    case ActionTypes.FETCH_HABITS:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FETCH_HABITS_SUCCESS:
      return {
        ...state,
        loading: false,
        habits: action.payload,
      }
    case ActionTypes.FETCH_HABITS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}