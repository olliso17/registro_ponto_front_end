import axios from 'axios';
import Button from '../button/Button';
import useTimer from '../hooks/time';
import Top from '../top/Top';
import classes from "./TimeComponent.module.css";

type Props = {
    userData: any;
};

const TimerComponent = ({ userData }: Props) => {
    const { time, pauseTimer, resumeTimer, stopTimer, status } = useTimer();

    const handlePause = async () => {
        await pauseTimer();
        await saveWorkedHours();
        window.location.reload();
    };

    const handleResume = async () => {
        await resumeTimer();
        await saveWorkedHours();
        window.location.reload();
    };

    const handleStop = async () => {
        await stopTimer();
        await saveWorkedHours();
        window.location.reload();
    };

    const saveWorkedHours = async () => {
        const types = await axios.get('http://localhost:3000/api/type');
        const typeName = types.data.find((type: any) => type._name === status);
        if (typeName) {
            const hours = `${time.hours}h ${time.minutes}m`;
            await axios.post('http://localhost:3000/api/workedHours/create', {
                employee_id: userData._id,
                type_id: typeName._id,
                hours_worked: hours
            });
        }
    };

    return (
        <div>
            <Top time={time} status={status} userData={userData} />
            <div className={classes.buttonDiv}>
                {status === "entrada" && <Button onClick={handlePause} name='Intervalo' />}
                {status === "almoco_entrada" && <Button onClick={handleResume} name='Retomar Intervalo' />}
                {status === "almoco_saida" && <Button onClick={handleStop} name='Finalizar Expediente' />}
            </div>
        </div>
    );
};

export default TimerComponent;
