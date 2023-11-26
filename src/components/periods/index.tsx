import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Select } from 'components/select';
import { PERIODS } from 'components/new-habit/constants';
import { Period } from 'components/new-habit/types';
import { REPEAT_CONTEXT, TIMES_A } from './constants';
import styles from './styles.module.scss';

export const Periods = () => {
  const { register, setValue, getValues } = useFormContext();

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    // Delete all characters that are not numbers
    const value = getValues('count').replace(/\D/g, '');
    setValue('count', event.target.validity.valid ? event.target.value : value);
  };

  return (
    <div className={styles.container}>
      {REPEAT_CONTEXT}
      <input
        className={styles.input}
        pattern='[0-9]*'
        {...register('count', {
          required: true,
          pattern: /[0-9]*/,
          onChange: onChangeHandle,
        })}
      />
      {TIMES_A}
      <Select<Period> items={PERIODS} defaultItem={PERIODS[0]} renderValue='name' keyValue='id' />
    </div>
  );
};
