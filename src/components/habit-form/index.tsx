import { useFormContext } from 'react-hook-form';
import { IconPicker } from 'components/icon-picker';
import { TextField } from 'components/text-field';
import { Textarea } from 'components/textarea';
import { Periods } from 'components/periods';
import { HabitFormProps } from './types';
import { FIELDS } from './constants';
import styles from './styles.module.scss';

export const HabitForm = ({ onSubmit, title, onSubmitButtonTitle }: HabitFormProps) => {
  const { handleSubmit } = useFormContext();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles['line-container']}>
        <TextField {...FIELDS.name} />
        <IconPicker />
      </div>
      <Textarea {...FIELDS.description} />
      <Periods />
      <input type='submit' value={onSubmitButtonTitle} className={styles['submit-button']} />
    </form>
  );
};
