import Button from '../button/Button';
import useTimer from '../hooks/time';
import Top from '../top/Top';
import classes from "./TimeComponent.module.css"

type Props = {
    userData: any;
 
}

const TimerComponent = ({ userData}: Props) => {
    const { time, status, pauseTimer, resumeTimer, stopTimer} = useTimer();
    return (
        <div>
            <Top time={time} status={status} userData={userData} />
            <div className={classes.buttonDiv}>
                {status =="entrada"?<Button onClick={()=>pauseTimer} name='Intervalo' />:""}
                {status =="almoco_entrada"?<Button onClick={()=>resumeTimer} name='Retomar Intervalo' />:""}
                {status =="almoco_saida"?<Button onClick={()=>stopTimer} name='Finalizar Espediente' />:""}
            </div>

        </div>
    );
};

export default TimerComponent;
