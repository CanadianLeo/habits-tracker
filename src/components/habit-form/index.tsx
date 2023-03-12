import cn from 'classnames';
import { useFormContext } from 'react-hook-form';
import { IconPicker } from '../icon-picker';
import { Periods } from '../periods';
import { HabitFormProps } from './types';
import styles from './styles.module.scss';

export const HabitForm = ({
    onSubmit,
    title,
    onSubmitButtonTitle,
}: HabitFormProps) => {
    const { handleSubmit, register } = useFormContext();
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles['habit-form_wrapper']}
        >
            <h3 className={styles['habit-form_title']}>{title}</h3>
            <div className={styles['habit-form_line-wrapper']}>
                <div className={styles['habit-form_floating']}>
                    <input
                        {...register('name', { required: true })}
                        placeholder="Habit name"
                        className={styles['habit-form_input']}
                    />
                    <label
                        className={styles['habit-form_label']}
                        htmlFor="name"
                    >
                        Habit name
                    </label>
                </div>
                <IconPicker />
            </div>
            <div className={styles['habit-form_floating']}>
                <textarea
                    {...register('description', { required: true })}
                    placeholder="Habit description"
                    className={cn(
                        styles['habit-form_input'],
                        styles['habit-form_textarea']
                    )}
                />
                <label
                    className={styles['habit-form_label']}
                    htmlFor="description"
                >
                    Habit description
                </label>
            </div>
            <Periods />
            <input
                type="submit"
                value={onSubmitButtonTitle}
                className={styles['habit-form_submit-button']}
            />
        </form>
    );
};
