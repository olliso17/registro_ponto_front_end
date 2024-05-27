import classes from "./FormComponent.module.css"
import Button from '../button/Button';
import Top from "../top/Top";
import{ Timer, TimerStatus } from "../hooks/time";
import CardComponent from "../card/CardComponent";

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
               <CardComponent/>
            </div>

        </div>
    )
}

export default FormComponent