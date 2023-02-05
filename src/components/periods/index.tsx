import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { Select } from "../select";
import { PERIODS } from "../new-habit/constants";
import { Period } from "../new-habit/types";
import './periods.css';

export const Periods = () => {
    const { register, setValue, getValues } = useFormContext();

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        // Delete all characters that are not numbers
        const value = getValues('count').replace(/\D/g, '');
        setValue("count", event.target.validity.valid ? event.target.value : value);
    }

    return (
        <div className="periods_wrapper">
            Repeat
            <input className="periods_input" pattern="[0-9]*"  {...register('count', { required: true, pattern: /[0-9]*/, onChange: onChangeHandle})} />
            times a
            <Select<Period> items={PERIODS} defaultItem={PERIODS[0]} renderValue='name' keyValue="id"/>
        </div>
    )
}