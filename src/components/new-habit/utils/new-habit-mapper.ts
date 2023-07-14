import { FieldValues } from "react-hook-form";
import { DEFAULT_COLOR, DEFAULT_ICON } from "../../../constants";
import { Habit } from "../../../types";
import { getUniqueId } from "../../../utils/get-unique-id";

export const newHabitMapper = (data: FieldValues, habitid?: string): Habit => ({
  id: habitid ?? getUniqueId(),
  name: data.name ?? '',
  description: data.description ?? '',
  icon: data.icon ?? DEFAULT_ICON,
  color: data.color ?? DEFAULT_COLOR,
  currentValue: 0,
  targetValue: +data.count ?? 1,
  period: data.period,
});