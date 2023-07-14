import { Habit } from "../types";

export enum ActionTypes {
  FETCH_HABITS = 'FETCH_HABITS',
  FETCH_HABITS_SUCCESS = 'FETCH_HABBIT_SUCCESS',
  FETCH_HABITS_FAILED = 'FETCH_HABIT_FAILED',
}

interface FetchHabitAction {
  type: ActionTypes.FETCH_HABITS;
}

interface FetchHabitActionSuccess {
  type: ActionTypes.FETCH_HABITS_SUCCESS;
  payload: Array<Habit>;
}
interface FetchHabitActionFailed {
  type: ActionTypes.FETCH_HABITS_FAILED;
  payload: string;
}

export type HabitsAction = FetchHabitAction | FetchHabitActionSuccess | FetchHabitActionFailed;

export interface HabitState {
  loading: boolean;
  error: null | string;
  habits: Array<Habit>;
}