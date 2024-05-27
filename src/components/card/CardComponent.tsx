import classes from "./CardComponent.module.css"

const CardComponent = () => {
    return (
        <div className={classes.card}>
            <p className={classes.hours}>03/11/23</p>
            <p className={classes.time}>07h 40m</p>
        </div>
    )
}

export default CardComponent