import { FieldValues, useForm } from 'react-hook-form';

export const NewHabbit = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    return (
        <div className='new-habbit'>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <input {...register('name', { required: true })}/>
                <input {...register('description', { required: true })}/>
                <input type='submit'/>
            </form>
        </div>
    );
}
