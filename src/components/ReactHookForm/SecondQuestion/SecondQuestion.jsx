import './styles.scss';

const SecondQuestion = ({handleSubmit, register, watch, setIsSecondQ, reset}) => {
    const onSubmit = data => {
        alert(`Ты любишь кушать ${data.fruits.join(', ')} и смотреть аниме ${data.anime}`)
        setIsSecondQ(false)
        reset()
    }
    return (
        <section className="secondQ">
            <h3>Choose your favorite anime</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    Naruto
                    <input name="Naruto" type="radio" value="Naruto" {...register("anime")} />
                </label>
                <label>
                    Sword Art Online
                    <input name="Sword Art Online" type="radio" value="Sword Art Online" {...register("anime")} />
                </label>
                <label>
                    Атака Титанов
                    <input name="Атака Титанов" type="radio" value="Атака Титанов" {...register("anime")} />
                </label>
                <div>
                    <button onClick={() => {setIsSecondQ(false)}}>Go back</button>
                    <input type="submit" disabled={!watch().anime} className={`${!watch().anime && 'disabledBtn'}`}/>
                </div>
            </form>
        </section>

    )
}

export default SecondQuestion