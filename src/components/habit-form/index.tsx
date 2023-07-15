import { useFormContext } from 'react-hook-form';
import { IconPicker } from '../icon-picker';
import { TextField } from '../text-field';
import { Textarea } from '../textarea';
import { Periods } from '../periods';
import { HabitFormProps } from './types';
import styles from './styles.module.scss';
import { FIELDS } from './constants';

export const HabitForm = ({
  onSubmit,
  title,
  onSubmitButtonTitle,
}: HabitFormProps) => {
  const { handleSubmit } = useFormContext();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles['line-container']}>
        <TextField {...FIELDS.name} />
        <IconPicker />
      </div>
      <Textarea {...FIELDS.description} />
      <Periods />
      <input
        type="submit"
        value={onSubmitButtonTitle}
        className={styles['submit-button']}
      />
    </form>
  );
};