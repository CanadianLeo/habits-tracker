import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { HabitForm } from '../habit-form';
import { Dialog } from '../dialog';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { habitSelector } from '../../store/selectors';
import { formHabitBuilder } from './utils/form-habit-builder';
import { fetchEditHabit } from './utils/fetch-edit-habit';
import { newHabitMapper } from '../new-habit/utils/new-habit-mapper';
import {
    SAVE_HABIT_BUTTON_TITLE,
    EDIT_HABIT_TITLE,
} from './constants';
import { EditHabitProps } from './types';

export const EditHabit = ({ habitId, onClose }: EditHabitProps) => {
    const habit = useTypedSelector(habitSelector(habitId));

    const editHabitForm = useForm({
        defaultValues: formHabitBuilder(habit[0]),
    });

    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        fetchEditHabit(newHabitMapper(data, habitId));
        // TODO: add reload habits list
        onClose();
    };

    return (
        <Dialog onClose={onClose}>
            <FormProvider {...editHabitForm}>
                <HabitForm
                    onSubmit={onSubmit}
                    title={EDIT_HABIT_TITLE}
                    onSubmitButtonTitle={SAVE_HABIT_BUTTON_TITLE}
                />
            </FormProvider>
        </Dialog>     
    );
};
