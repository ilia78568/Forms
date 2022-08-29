import {useState} from "react";
import { Formik } from 'formik';

import FirstQuestion from "./FirstQuestion/FirstQuestion";
import SecondQuestion from "./SecondQuestion/SecondQuestion";

import './styles.scss';

const ReactFormik = () => {
    const [isFirstQ,setIsFirstQ] = useState(true)

    return (
        <div>
            <Formik
                initialValues={{
                    anime: '',
                    checked: [],
                }}
                onSubmit={values => {
                    alert(`Ты любишь кушать ${values.checked.join(', ')} и смотреть аниме ${values.anime}`)
                }}
            >
                {({ values, errors, isValidating }) => {
                    const changeQ = () => {
                        if(values.checked.length) {
                            setIsFirstQ(false)
                        }
                    }
                    return (
                        <>
                            {isFirstQ ?
                                <FirstQuestion values={values} changeQ={changeQ} /> :
                                <SecondQuestion values={values}/>
                            }
                        </>
                    )
                }}
            </Formik>
        </div>
    )
}

export default ReactFormik