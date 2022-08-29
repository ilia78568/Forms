import React from "react";
import {Field, Form, FormikValues} from "formik";
import './styles.scss';

interface ISecondQuestion {
    values: FormikValues
}

const SecondQuestion: React.FC<ISecondQuestion> = ({values}) => {
    return (
        <Form className='secondQ'>
            <h3>Choose your favorite anime</h3>
            <div className="form">
                <label>
                    Naruto
                    <Field type="radio" name="anime" value="Naruto" />
                </label>
                <label>
                    Sword Art Online
                    <Field type="radio" name="anime" value="Sword Art Online" />
                </label>
                <label>
                    Атака Титанов
                    <Field type="radio" name="anime" value="Атака Титанов" />
                </label>
            </div>
            <button disabled={!values.anime} className={`${!values.anime && 'disabledBtn'}`} type="submit">Submit</button>
        </Form>
    )
}

export default SecondQuestion