import classes from "./Top.module.css"


const Top = () => {
    return (
        <>
            <div className={classes.top}>
                <p>Relógio de Ponto</p>
                <p>Hash usuario <br /><label className={classes.textUser}>Usuário</label></p>
            </div>

            <div className={classes.divHours}>
                <p className={classes.textHours}>0h 00m</p>
                <p className={classes.text}>Horas de Hoje</p>
            </div>
        </>
    )
}

export default Top