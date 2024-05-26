import React from 'react'
import FormComponent from '../components/form/FormComponent'
import classes from './EntryTime.module.css'

const EntryTime = ()=>{
    return(
        <div className={classes.entryTime}> 
            <FormComponent name="Hora de Entrada"/>
        </div>
    )
}

export default EntryTime