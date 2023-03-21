import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchNewHabit } from './utils/fetch-new-habit';
import { newHabitMapper } from './utils/new-habit-mapper';
import { HabitForm } from '../habit-form';
import { Dialog } from '../dialog';
import {
    CREATE_HABIT_BUTTON_TITLE,
    CREATE_HABIT_TITLE,
    NEW_HABIT_FORM_DEFAULT_VALUES,
} from './constants';
import { NewHabitProps } from './types';

export const NewHabit = ({ onClose }: NewHabitProps) => {
    const newHabitForm = useForm({
        defaultValues: NEW_HABIT_FORM_DEFAULT_VALUES,
    });

    const onSubmit = async (data: FieldValues) => {
        fetchNewHabit(newHabitMapper(data));
        // TODO: add reload habits list
        onClose();
    };

    return (
        <Dialog onClose={onClose}>
            <FormProvider {...newHabitForm}>
                <HabitForm
                    onSubmit={onSubmit}
                    title={CREATE_HABIT_TITLE}
                    onSubmitButtonTitle={CREATE_HABIT_BUTTON_TITLE}
                />
            </FormProvider>
        </Dialog>     
    );
};
