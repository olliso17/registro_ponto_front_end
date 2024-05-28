import useFormattedDateTime from "../hooks/dateFormat";
import classes from "./CardComponent.module.css"

type Props={
    worked:any
    userData: any;
}

const CardComponent = ({worked}:Props) => {
    const { formattedDate, formattedTime } = useFormattedDateTime(worked._created_at);
    let name ;
    if(worked?._type.name === "entrada"){
        name ='entry into work'
    }
    if(worked?._type.name === "almoco_entrada"){
        name ='interval'
    }
    if(worked?._type.name === "almoco_saida"){
        name ='end of interval'
    }
    if(worked?._type.name === "saida"){
        name ='End of work'
    }

    return (
        <div className={classes.card}>
            <p className={classes.hours}>{formattedDate +' - '+ formattedTime}</p>
            <p className={classes.time}>{worked._hours_worked}</p>
            
            <p className={classes.time}>{name}</p>
        </div>
    )
}

export default CardComponent