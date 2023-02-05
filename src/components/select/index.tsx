import { useFormContext } from "react-hook-form";
import { SelectProps } from "./types";
import './select.css';

export const Select = <T, >({defaultItem, renderValue, keyValue, items}: SelectProps<T>) => {
    const { register } = useFormContext();
    return (
        <select className="select_input" {...register('period', { required: true })} defaultValue={String(defaultItem[renderValue])}>
            {items.map((item: T) => 
                <option key={String(item[keyValue])}>{String(item[renderValue])}</option>
            )}
        </select>
    );
  }