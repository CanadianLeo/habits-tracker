import { FieldValues } from 'react-hook-form';

export type HabitFormProps = {
    onSubmitButtonTitle?: string;
    title?: string;
    onSubmit: (data: FieldValues) => void;
};
