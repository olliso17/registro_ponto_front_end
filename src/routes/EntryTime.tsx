import { useParams } from 'react-router-dom';
import EntryTimeComponent from '../components/entrytime/EntryTimeComponent';
import useUserData from '../components/hooks/getEmployeeId';
import useTimer from '../components/hooks/time';
import classes from './EntryTime.module.css';

const EntryTime = () => {
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
            <EntryTimeComponent time={time} status={status} userData={userData} />
        </div>
    )
}

export default EntryTime