import { client } from '../../server/axios';
import Button from '../button/Button';
import useTimer from '../hooks/time';
import Top from '../top/Top';
import classes from "./TimeComponent.module.css";

type Props = {
    userData: any;
};

const TimerComponent = ({ userData }: Props) => {
    const { time, pauseTimer, resumeTimer, stopTimer, status } = useTimer();

    const handlePause = async (statusGet: string) => {
        await pauseTimer();
        await saveWorkedHours(statusGet);
        window.location.reload();
    };

    const handleResume = async (statusGet: string) => {
        await resumeTimer();
        await saveWorkedHours(statusGet);
        window.location.reload();
    };

    const handleStop = async (statusGet: string) => {
        await stopTimer();
        await saveWorkedHours(statusGet);
        window.location.reload();
    };

    const saveWorkedHours = async (statusGet: string) => {
        const types = await client.get('type');
        const typeName = types.data.find((type: any) => type._name === statusGet);
        if (typeName) {
            const hours = `${time.hours}h ${time.minutes}m`;
            await client.post('workedHours/create', {
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
                {status === "entrada" && <Button onClick={() => handlePause('almoco_entrada')} name='Interval' />}
                {status === "almoco_entrada" && <Button onClick={() => handleResume("almoco_saida")} name='End Interval' />}
                {status === "almoco_saida" && <Button onClick={() => handleStop("saida")} name='End Workday' />}
            </div>
        </div>
    );
};

export default TimerComponent;
