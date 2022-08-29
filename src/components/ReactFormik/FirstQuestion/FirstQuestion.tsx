import React from "react";
import {Field, Form, FormikValues} from "formik";
import './styles.scss';

interface IFirstQuestion {
    changeQ: () => void;
    values: FormikValues
}

const FirstQuestion: React.FC<IFirstQuestion> = ({changeQ, values}) => {
    return (
        <section className="firstQ">
            <Form>
                <h3>Choose fruits you like</h3>
                <div className="form">
                    <label>
                        Banana
                        <Field type="checkbox" name="checked" value="Banana" />
                    </label>
                    <label>
                        Apple
                        <Field type="checkbox" name="checked" value="Apple" />
                    </label>
                    <label>
                        Pineapple
                        <Field type="checkbox" name="checked" value="Pineapple" />
                    </label>
                    <label>
                        Pear
                        <Field type="checkbox" name="checked" value="Pear" />
                    </label>
                </div>
            </Form>
            <button
                disabled={!values.checked.length}
                className={`button ${!values.checked.length && 'disabledBtn'}`}
                onClick={changeQ}
            >
                Next question
            </button>
        </section>
    )
}

export default FirstQuestion