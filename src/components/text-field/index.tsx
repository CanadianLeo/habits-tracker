import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from './types';
import styles from './styles.module.scss';

export const TextField = ({ id, placeholder }: TextFieldProps) => {
  const { register } = useFormContext();
  return (
    <div className={styles['floating']}>
      <input {...register(id, { required: true })} placeholder={placeholder} className={styles['input']} />
      <label className={styles['label']} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};
