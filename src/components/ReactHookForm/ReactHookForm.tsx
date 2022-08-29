import {useForm} from "react-hook-form";
import {useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import FirstQuestion from "./FirstQuestion/FirstQuestion";
import SecondQuestion from "./SecondQuestion/SecondQuestion";

import './styles.scss';

export type Inputs = {
    fruits: string[];
    anime: string;
}

const schema = yup.object({
    fruits: yup.array().min(1).required(),
}).required()

const ReactHookForm = () => {
    const [isSecondQ,setIsSecondQ] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            fruits: [],
            anime: ''
        },
        resolver: yupResolver(schema)
    });
    return (
        <>
            {isSecondQ ?
                <SecondQuestion reset={reset} errors={errors} setIsSecondQ={setIsSecondQ} handleSubmit={handleSubmit} register={register} /> :
                <FirstQuestion errors={errors} setIsSecondQ={setIsSecondQ} handleSubmit={handleSubmit} register={register}/>
            }
        </>
    )
}

export default ReactHookForm