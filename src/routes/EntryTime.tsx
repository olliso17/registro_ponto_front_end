import React from 'react'
import FormComponent from '../components/form/FormComponent'
import classes from './EntryTime.module.css'
import { useParams } from 'react-router-dom';
import useUserData from '../components/hooks/getEmployeeId';

const EntryTime = ()=>{
    const { id } = useParams<{ id: string }>();

    const { userData, error, loading } = useUserData(id);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return(
        <div className={classes.entryTime}> 
            <Top time={time} userData={userData} status={status}/>

            <FormComponent name="Hora de Entrada"/>
        </div>
    )
}

export default EntryTime