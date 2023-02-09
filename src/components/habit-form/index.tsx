import { useFormContext } from "react-hook-form"
import { IconPicker } from "../icon-picker";
import { Periods } from "../periods";
import { HabbitFormProps } from "./types";
import './habit-form.css';

export const HabbitFrom = ({ onSubmit, title, onSubmitButtonTitle }: HabbitFormProps) => {
    const { handleSubmit, register } = useFormContext();
    return (
        <form onSubmit={ handleSubmit(onSubmit) }  className="habit-form_wrapper">
            <h3 className="habit-form_title">{title}</h3>
            <div className="habit-form_line-wrapper">
                <div className="habit-form_floating">
                    <input {...register('name', { required: true })}
                        placeholder="Habit name"
                        className="habit-form_input"/>
                    <label className="habit-form_label" htmlFor="name">Habit name</label>
                </div>
                <IconPicker />
            </div>
            <div className="habit-form_floating">
                <textarea {...register('description', { required: true })}
                    placeholder="Habit description"
                    className="habit-form_input habit-form_textarea"/>
                <label className="habit-form_label" htmlFor="description">Habit description</label>
            </div>
            <Periods />
            <input type='submit' value={onSubmitButtonTitle} className="habit-form_submit-button"/>
        </form>
    )
}