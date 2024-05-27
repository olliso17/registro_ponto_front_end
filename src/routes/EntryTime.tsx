import { useParams } from 'react-router-dom';
import FormComponent from '../components/form/FormComponent';
import useUserData from '../components/hooks/getEmployeeId';
import useTimer from '../components/hooks/time';
import Top from '../components/top/Top';
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
            <Top time={time} userData={userData} status={status} />
            <FormComponent userData={userData} />
        </div>
    )
}

export default EntryTime