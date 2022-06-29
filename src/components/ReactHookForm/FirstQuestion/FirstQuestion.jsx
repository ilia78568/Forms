import './styles.scss';

const FirstQuestion = ({handleSubmit, register, setIsSecondQ, watch}) => {

    const onSubmit = () => {
       setIsSecondQ(true)
    }
    return (
        <section className="firstQ">
            <h3>Choose fruits you like</h3>
            <form className="form">
                <label>
                    Banana
                    <input name="Banana" type="checkbox" value="Banana" {...register("fruits")} />
                </label>
                <label>
                    Apple
                    <input name="Apple" type="checkbox" value="Apple" {...register("fruits")} />
                </label>
                <label>
                    Watermelon
                    <input name="Apple" type="checkbox" value="Watermelon" {...register("fruits")} />
                </label>
                <label>
                    Pineapple
                    <input name="Apple" type="checkbox" value="Pineapple" {...register("fruits")} />
                </label>
                <label>
                    Pear
                    <input name="Apple" type="checkbox" value="Pear" {...register("fruits")} />
                </label>
                <button className={`${!watch().fruits.length && 'disabledBtn'}`} disabled={!watch().fruits.length} onClick={handleSubmit(onSubmit)} >Next question</button>
            </form>
        </section>

    )
}

export default FirstQuestion