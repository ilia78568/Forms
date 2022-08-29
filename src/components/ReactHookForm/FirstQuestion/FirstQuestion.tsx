import {UseFormHandleSubmit, UseFormRegister} from "react-hook-form/dist/types/form";
import React, {ReactNode} from "react";
import {FieldErrors} from "react-hook-form";

import './styles.scss';
import {Inputs} from "../ReactHookForm";

interface IFirstQuestion {
    handleSubmit: UseFormHandleSubmit<Inputs>;
    register: UseFormRegister<Inputs>;
    errors:  FieldErrors;
    setIsSecondQ: (bool: boolean) => void;
}

const FirstQuestion: React.FC<IFirstQuestion> = ({handleSubmit, register, setIsSecondQ, errors}) => {
    const onSubmit = () => {
        if(!errors?.fruits?.message) {
            setIsSecondQ(true)
        }
    }
    return (
        <section className="firstQ">
            <h3>Choose fruits you like</h3>
            <form className="form">
                <label>
                    Banana
                    <input type="checkbox" value="Banana" {...register("fruits")} />
                </label>
                <label>
                    Apple
                    <input type="checkbox" value="Apple" {...register("fruits")} />
                </label>
                <label>
                    Watermelon
                    <input type="checkbox" value="Watermelon" {...register("fruits")} />
                </label>
                <label>
                    Pineapple
                    <input type="checkbox" value="Pineapple" {...register("fruits")} />
                </label>
                <label>
                    Pear
                    <input type="checkbox" value="Pear" {...register("fruits")} />
                </label>
                {errors?.fruits?.message && <span className={'error-span'}>{errors?.fruits?.message as ReactNode}</span>}
                <button disabled={!!errors?.fruits?.message} className={`${errors?.fruits?.message && 'disabledBtn'}`}  onClick={handleSubmit(onSubmit)} >Next question</button>
            </form>
        </section>

    )
}

export default FirstQuestion