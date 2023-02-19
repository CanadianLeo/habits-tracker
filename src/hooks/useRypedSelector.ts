import { TypedUseSelectorHook, useSelector } from "react-redux";
import { HabitState } from "../types/habitsReducerTypes";

export const useTypedSelector: TypedUseSelectorHook<HabitState>  = useSelector;