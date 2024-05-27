import classes from "./FormComponent.module.css"
import Button from '../button/Button';
import Top from "../top/Top";
import{ Timer, TimerStatus } from "../hooks/time";

type Props = {
    name: string
    userData: any
    time:Timer
    status:TimerStatus
}

const FormComponent = ({ name , userData, time, status}: Props) => {
    return (
        <div className={classes.container}>
            <Top time={time} userData={userData} status={status}/>
            <Button name={name} onClick={()=>{}}/>
            <p className={classes.text}>Dias anteriores</p>
            <div className={classes.form}>
                <div className={classes.card}>
                    <p className={classes.hours}>03/11/23</p>
                    <p className={classes.time}>07h 40m</p>
                </div>
            </div>

        </div>
    )
}

export default FormComponent