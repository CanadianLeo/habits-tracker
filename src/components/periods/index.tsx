import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Select } from 'components/select';
import { PERIODS } from 'components/new-habit/constants';
import { Period } from 'components/new-habit/types';
import { TextField } from 'components/text-field';
import { TIMES_A, FIELD_REPEAT } from './constants';
import styles from './styles.module.scss';

export const Periods = () => {
  const { setValue, getValues } = useFormContext();

  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    // Delete all characters that are not numbers
    const value = getValues('count').replace(/\D/g, '');
    setValue('count', event.target.validity.valid ? event.target.value : value);
  };

  return (
    <div className={styles.container}>
      <TextField {...FIELD_REPEAT} onChange={onChangeHandle} />
      {TIMES_A}
      <Select<Period> items={PERIODS} defaultItem={PERIODS[0]} renderValue='name' keyValue='id' />
    </div>
  );
};
