import { useFormContext } from 'react-hook-form';
import { SelectProps } from './types';
import styles from './styles.module.scss';

export const Select = <T,>({
    defaultItem,
    renderValue,
    keyValue,
    items,
}: SelectProps<T>) => {
    const { register } = useFormContext();
    return (
        <select
            className={styles['select_input']}
            {...register('period', { required: true })}
            defaultValue={String(defaultItem[renderValue])}
        >
            {items.map((item: T) => (
                <option key={String(item[keyValue])}>
                    {String(item[renderValue])}
                </option>
            ))}
        </select>
    );
};
