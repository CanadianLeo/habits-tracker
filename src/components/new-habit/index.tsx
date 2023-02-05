import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { DEFAULT_COLOR, DEFAULT_ICON } from '../../constants';
import { HabbitFrom } from '../habit-form';
import { CREATE_HABIT_BUTTON_TITLE, CREATE_HABIT_TITLE, PERIODS } from './constants';

export const NewHabit = () => {
    const methods = useForm({
        defaultValues: {
            name: '',
            description: '',
            count: 1,
            period: PERIODS[0],
            color: DEFAULT_COLOR,
            icon: DEFAULT_ICON,
        }
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <div className='new-habit'>
            <FormProvider {...methods} >
                <HabbitFrom onSubmit={onSubmit} title={CREATE_HABIT_TITLE} onSubmitButtonTitle={CREATE_HABIT_BUTTON_TITLE}/>
            </FormProvider>
        </div>
    );
}
