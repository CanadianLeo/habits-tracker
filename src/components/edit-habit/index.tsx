import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { newHabitMapper } from 'components/new-habit/utils/new-habit-mapper';
import { HabitForm } from 'components/habit-form';
import { Dialog } from 'components/dialog';
import { fetchHabits } from 'store/action-creators/habits';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { habitSelector } from 'store/selectors';
import { formHabitBuilder } from './utils/form-habit-builder';
import { fetchEditHabit } from './utils/fetch-edit-habit';
import { SAVE_HABIT_BUTTON_TITLE, EDIT_HABIT_TITLE } from './constants';
import { EditHabitProps } from './types';

export const EditHabit = ({ habitId, onClose }: EditHabitProps) => {
  const dispatch = useDispatch();
  const habit = useTypedSelector(habitSelector(habitId));

  const editHabitForm = useForm({
    defaultValues: formHabitBuilder(habit),
  });

  const onSubmit = async (data: FieldValues) => {
    fetchEditHabit(newHabitMapper(data, habitId)).then(() => {
      dispatch<any>(fetchHabits());
    });

    onClose();
  };

  return (
    <Dialog onClose={onClose}>
      <FormProvider {...editHabitForm}>
        <HabitForm onSubmit={onSubmit} title={EDIT_HABIT_TITLE} onSubmitButtonTitle={SAVE_HABIT_BUTTON_TITLE} />
      </FormProvider>
    </Dialog>
  );
};
