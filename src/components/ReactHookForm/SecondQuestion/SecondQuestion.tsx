import React, {useState} from "react";
import {UseFormHandleSubmit, UseFormRegister, UseFormReset} from "react-hook-form/dist/types/form";
import {FieldErrors} from "react-hook-form";

import './styles.scss';
import {Inputs} from "../ReactHookForm";

interface ISecondQuestion {
    handleSubmit: UseFormHandleSubmit<Inputs>;
    register: UseFormRegister<Inputs>;
    errors:  FieldErrors;
    setIsSecondQ: (bool: boolean) => void;
    reset: UseFormReset<Inputs>
}

const SecondQuestion: React.FC<ISecondQuestion> = ({handleSubmit, register, errors, setIsSecondQ, reset}) => {
    const [isSelected, setIsSelected] = useState(false)
    const onSubmit = (data: Inputs) => {
        setIsSelected(true)
        if(data.anime) {
            alert(`Ты любишь кушать ${data.fruits.join(', ')} и смотреть аниме ${data.anime}`)
            setIsSecondQ(false)
            reset()
        }
    }
    return (
        <section className="secondQ">
            <h3>Choose your favorite anime</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    Naruto
                    <input type="radio" value="Naruto" {...register("anime")} />
                </label>
                <label>
                    Sword Art Online
                    <input type="radio" value="Sword Art Online" {...register("anime")} />
                </label>
                <label>
                    Атака Титанов
                    <input type="radio" value="Атака Титанов" {...register("anime")} />
                </label>
                {isSelected && <span className={'error-span'}>Пожалуйста выберите аниме</span>}
                <div>
                    <button onClick={() => {setIsSecondQ(false)}}>Go back</button>
                    <input type="submit" disabled={!!errors?.anime?.message} className={`${errors?.anime?.message && 'disabledBtn'}`}/>
                </div>
            </form>
        </section>
    )
}

export default SecondQuestion