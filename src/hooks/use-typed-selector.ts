import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { HabitState } from 'types/habits-reducer-types';

export const useTypedSelector: TypedUseSelectorHook<HabitState> = useSelector;
