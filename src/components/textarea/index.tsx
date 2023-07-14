import cn from 'classnames';
import { useFormContext } from "react-hook-form";
import { TextareaProps } from "./types";
import styles from './styles.module.scss';

export const Textarea = ({ id, placeholder }: TextareaProps) => {
  const { register } = useFormContext();
  return (
    <div className={styles['floating']}>
      <textarea
        {...register(id, { required: true })}
        placeholder={placeholder}
        className={cn(
          styles.input,
          styles.textarea
        )}
      />
      <label
        className={styles.label}
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  )
}