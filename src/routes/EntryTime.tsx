import { useParams } from 'react-router-dom';
import EntryTimeComponent from '../components/entrytime/EntryTimeComponent';
import useTimer from '../components/hooks/time';
import classes from './EntryTime.module.css';
import useUserDataEntry from '../components/hooks/getWorkedHoursEntry';
import useUserData from '../components/hooks/getEmployeeId';

const EntryTime = () => {
    const { id } = useParams<{ id: string }>();
    const valueId = id;
    const { time, status } = useTimer();
    const { userDataEntry, error: entryError, loading: entryLoading } = useUserDataEntry(id);
    const { userData, error: userError, loading: userLoading } = useUserData(id)

    if (userLoading || entryLoading) {
        return <div>Carregando...</div>;
    }
    if (userError || entryError) {
        return <div>{userError || entryError}</div>;
    }
    if (!userDataEntry) {
        return <div>Dados de saída não encontrados para o usuário com ID {id}</div>;
    }

    return (
        <div className={classes.entryTime}>

            <EntryTimeComponent id={valueId} time={time} status={status} userData={userData} userDataEntry={userDataEntry} />
        </div>
    )
}

export default EntryTime