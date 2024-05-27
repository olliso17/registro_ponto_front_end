import React from 'react'
import FormComponent from '../components/form/FormComponent'
import classes from './EntryTime.module.css'

const EntryTime = ()=>{
    return(
        <div className={classes.entryTime}> 
            <Top time={time} userData={userData} status={status}/>

            <FormComponent name="Hora de Entrada"/>
        </div>
    )
}

export default EntryTime