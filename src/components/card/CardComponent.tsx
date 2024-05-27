
import useFormattedDateTime from "../hooks/dateFormat";
import classes from "./CardComponent.module.css"

type Props={
    worked:any
    userData: any;
}

const CardComponent = ({worked}:Props) => {
    const { formattedDate, formattedTime } = useFormattedDateTime(worked._created_at);
    return (
        <div className={classes.card}>
            <p className={classes.hours}>{formattedDate +' - '+ formattedTime}</p>
            <p className={classes.time}>{worked._hours_worked}</p>
            <p className={classes.time}>{worked._type.name}</p>
        </div>
    )
}

export default CardComponent