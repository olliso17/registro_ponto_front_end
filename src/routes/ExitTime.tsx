import { useParams } from 'react-router-dom';
import ExitTimeComponent from '../components/exitTime/ExitTimeComponent';
import useUserData from '../components/hooks/getEmployeeId';
import useTimer from '../components/hooks/time';
import classes from "./ExitTime.module.css";
import useUserDataExit from '../components/hooks/getWorkedHoursExit';

const ExitTime = () => {
    
    const { id } = useParams<{ id: string }>();
    const { time, status } = useTimer();
    const { userData, error: userError, loading: userLoading } = useUserData(id);
    const { userDataExit, error: exitError, loading: exitLoading } = useUserDataExit(id);

    if (userLoading || exitLoading) {
        return <div>Carregando...</div>;
    }
    if (userError || exitError) {
        return <div>{userError || exitError}</div>;
    }
    if (!userDataExit) {
        return <div>Dados de saída não encontrados para o usuário com ID {id}</div>;
    }
    return (
        <div className={classes.entryTime}>
            <ExitTimeComponent id={id} time={time} status={status} userData={userData} userDataExit={userDataExit}  />
        </div>
    );
}

export default ExitTime;
