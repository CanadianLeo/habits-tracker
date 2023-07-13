import { useFormContext } from 'react-hook-form';
import { IconPicker } from '../icon-picker';
import { TextField } from '../text-field';
import { Textarea } from '../textarea';
import { Periods } from '../periods';
import { HabitFormProps } from './types';
import styles from './styles.module.scss';

export const HabitForm = ({
  onSubmit,
  title,
  onSubmitButtonTitle,
}: HabitFormProps) => {
  const { handleSubmit } = useFormContext();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles['wrapper']}
    >
      <h3 className={styles['title']}>{title}</h3>
      <div className={styles['line-wrapper']}>
        <TextField id='name' placeholder='Habit name' />
        <IconPicker />
      </div>
      <Textarea id='description' placeholder='Habit description' />
      <Periods />
      <input
        type="submit"
        value={onSubmitButtonTitle}
        className={styles['submit-button']}
      />
    </form>
  );
};