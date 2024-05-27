import { useState, useEffect } from 'react';
import { Timer, TimerStatus } from "../hooks/time";
import classes from "./Top.module.css";

type Props = {
    time: Timer;
    userData: any;
    status: TimerStatus
};

const Top = ({ time, userData, status}: Props) => {
    const [currentTime, setCurrentTime] = useState<Timer>({ hours: 0, minutes: 0 });

    useEffect(() => {
        setCurrentTime(time);
    }, [time]);

    return (
        <>
            <div className={classes.top}>
                <p>Relógio de Ponto</p>
                <p>{userData._hash} <br /><label className={classes.textUser}>{userData._name}</label></p>
            </div>
            <div className={classes.divHours}>
                <p className={classes.textHours}> {currentTime.hours}h e {currentTime.minutes}m</p>
                <p className={classes.text}>{status.toLocaleUpperCase()}</p>
            </div>

        </>
    );
};

export default Top;
