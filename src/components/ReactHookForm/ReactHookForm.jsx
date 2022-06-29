import {useForm} from "react-hook-form";
import {useState} from "react";

import FirstQuestion from "./FirstQuestion/FirstQuestion";
import SecondQuestion from "./SecondQuestion/SecondQuestion";

import './styles.scss';

const ReactHookForm = () => {

    const [isSecondQ,setIsSecondQ] = useState(false)

    const { register, watch, handleSubmit, reset } = useForm({
        defaultValues: {
            fruits: [],
            anime: ''
        }
    });

    return (
        <>
            {isSecondQ ?
                <SecondQuestion reset={reset} watch={watch} setIsSecondQ={setIsSecondQ} handleSubmit={handleSubmit} register={register} /> :
                <FirstQuestion watch={watch} setIsSecondQ={setIsSecondQ} handleSubmit={handleSubmit} register={register}/>
            }
        </>

    )
}

export default ReactHookForm