import { FieldValues } from 'react-hook-form';

export type HabbitFormProps = {
    onSubmitButtonTitle?: string;
    title?: string;
    onSubmit: (data: FieldValues) => void;
};
