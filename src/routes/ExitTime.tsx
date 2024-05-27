
import { useParams } from 'react-router-dom';
import ExitTimeComponent from '../components/exitTime/ExitTimeComponent';
import useUserData from '../components/hooks/getEmployeeId';
import useTimer from '../components/hooks/time';
import classes from "./ExitTime.module.css";


const ExitTime = () => {
    const { id } = useParams<{ id: string }>();
    const { time, status } = useTimer();
    const { userData, error, loading } = useUserData(id);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={classes.entryTime}>
            <ExitTimeComponent time={time} status={status} userData={userData} />
        </div>
    )
}

export default ExitTime