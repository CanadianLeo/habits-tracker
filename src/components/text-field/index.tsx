import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from './types';
import styles from './styles.module.scss';

export const TextField = ({ id, placeholder, required, pattern, onChange }: TextFieldProps) => {
  const { register } = useFormContext();
  const stringPattern = useMemo(() => {
    return pattern?.toString();
  }, [pattern])

  return (
    <div className={styles['floating']}>
      <input {...register(id, { required, pattern, onChange })} placeholder={placeholder} pattern={stringPattern} className={styles['input']} />
      <label className={styles['label']} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};
